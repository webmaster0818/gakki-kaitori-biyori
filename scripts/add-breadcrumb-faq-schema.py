#!/usr/bin/env python3
"""
Phase 1: SEO構造化データ追加スクリプト

- 全122記事に BreadcrumbList JSON-LD を追加
- FAQ schema が無い10記事に FAQPage JSON-LD を追加（記事トピックに応じた汎用Q&A）

実行方法:
  python3 scripts/add-breadcrumb-faq-schema.py [--dry-run] [--only SLUG]
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
SITE_URL = "https://gakkikaitori-biyori.com"

# FAQ-missing 10記事に追加する Q&A（記事トピックに合わせて作成）
FAQ_DATA = {
    "gakki-shobun-houhou": [
        ("楽器の処分方法で一番おすすめは何ですか？",
         "状態が良ければ買取専門店が最もお得です。値段がつかない楽器でも、寄付・譲渡・粗大ゴミなど10通りの方法があるため、まずは無料査定で値段を確認してから処分方法を決めるのがおすすめです。"),
        ("壊れた楽器でも処分する方法はありますか？",
         "あります。粗大ゴミ（500〜2,000円）、不用品回収業者（3,000〜20,000円）、自治体の小型家電回収ボックスなどが利用可能です。Fender・Gibsonなどブランド品の場合は壊れていても買取できるケースがあるため、廃棄前に査定をおすすめします。"),
        ("ピアノなどの大型楽器はどう処分すればいいですか？",
         "ピアノは粗大ゴミでは出せません。専門の運搬業者が必要で、廃棄費用は3〜5万円かかります。一方、ピアノ買取専門業者なら出張査定・運搬を無料で行ってくれるため、まずは買取査定を依頼するのが経済的です。"),
        ("楽器を寄付できる団体はありますか？",
         "NPO法人イシンプロジェクト、楽器寄付ふるさと納税、地域の音楽教室・吹奏楽部などが楽器の寄付を受け付けています。送料は自己負担になるケースが多いですが、税控除を受けられる場合もあります。"),
        ("廃品回収車に楽器を渡すのは安全ですか？",
         "おすすめできません。無料を謳いつつ、回収時に高額請求するトラブルが多発しています。一般廃棄物収集運搬業の許可を持つ業者か、自治体の粗大ゴミ収集を利用するのが安全です。"),
    ],
    "hitsuyou-shorui": [
        ("楽器買取に必要な書類は何ですか？",
         "古物営業法により、買取業者は本人確認が義務付けられているため、運転免許証・マイナンバーカード・パスポート・健康保険証など顔写真付きの身分証が必須です。出張・宅配買取では身分証のコピーを提出します。"),
        ("身分証なしで楽器を売ることはできますか？",
         "原則できません。古物営業法18条で本人確認が義務付けられており、身分証なしでは合法的な買取は成立しません。マイナンバーカード・運転免許証・パスポートのいずれかを必ず用意してください。"),
        ("購入時の領収書や保証書は必要ですか？",
         "必須ではありませんが、あると査定額が10〜30%アップします。特に高額モデル（10万円以上）では、保証書・領収書・購入店のレシートがあると正規品の証明になり買取額が上がります。"),
        ("印鑑は必要ですか？",
         "ほとんどの買取業者では不要です。買取契約書にはサインで対応可能で、シャチハタや三文判が必要になるケースはまれです。事前に業者へ確認しておくと安心です。"),
        ("未成年でも書類を揃えれば売れますか？",
         "18歳未満は原則買取不可です。18〜19歳であれば、親権者の同意書・親権者の身分証コピー・本人の身分証を揃えれば買取可能な業者が増えています。"),
    ],
    "gakki-kaitori-vs-kojin-baibai": [
        ("楽器買取と個人売買、どちらが高く売れますか？",
         "個人売買（メルカリ・ヤフオク）の方が10〜30%程度高く売れる傾向があります。ただし、出品の手間・梱包発送・トラブル対応の負担があるため、時間を考慮すると買取業者の方がトータルでお得な場合も多いです。"),
        ("メルカリで楽器を売るときの注意点は？",
         "送料・販売手数料（10%）が引かれます。また、楽器は破損リスクが高いため、梱包は専用ハードケース＋ダンボール二重で行い、配送は楽天SAL便・ヤマト便など補償付きを選びましょう。"),
        ("個人売買のデメリットは何ですか？",
         "売れるまで時間がかかる、値下げ交渉や質問対応に時間を取られる、配送中の破損・受取拒否トラブルなどが起こり得ます。高額楽器ほどリスクが高いため、買取業者を選ぶ人も多いです。"),
        ("ジモティーで楽器を売るのは安全ですか？",
         "手渡し・直接取引が基本のため詐欺リスクは低めですが、相手が冷やかしや無断キャンセルすることもあります。公共の場（駅前など）での待ち合わせ、現金即決取引を徹底してください。"),
        ("どちらを選ぶべきか判断基準を教えてください。",
         "高く売りたい・時間がある・梱包に自信がある → 個人売買。早く売りたい・手間を避けたい・確実に売却したい → 買取業者。10万円以上の高額楽器は個人売買のリスクが高いため買取業者がおすすめです。"),
    ],
    "kaitori-nagare": [
        ("楽器買取はどんな流れで進みますか？",
         "①Web/電話で査定申込 → ②写真送信またはヒアリングで仮査定 → ③出張査定または楽器送付 → ④本査定 → ⑤金額合意 → ⑥契約書類記入 → ⑦入金、の6ステップが一般的です。"),
        ("申込から入金まで何日くらいかかりますか？",
         "出張買取なら最短即日、宅配買取なら3〜7日、店頭買取なら当日中に完了します。急ぎの場合は出張買取または店頭買取を選ぶと良いでしょう。"),
        ("仮査定と本査定で金額が変わることはありますか？",
         "あります。仮査定は写真ベースのため、実物確認で傷・汚れ・動作不良が見つかると本査定で減額されることがあります。逆に状態が良ければアップするケースもあります。"),
        ("買取金額に納得できない場合はキャンセルできますか？",
         "ほとんどの業者でキャンセル可能です。出張・店頭買取はその場で断れます。宅配買取の場合は返送料が自己負担になる業者もあるため、事前に確認してください。"),
        ("買取代金はいつ振り込まれますか？",
         "出張・店頭買取は当日現金、宅配買取は本査定確定後1〜3営業日以内に銀行振込が一般的です。業者によっては最短当日振込も対応しています。"),
    ],
    "kaitori-houshiki-tetteihikaku": [
        ("出張・店頭・宅配買取はどれが一番おすすめですか？",
         "大型楽器・複数まとめ売り → 出張買取、すぐ現金化したい → 店頭買取、地方在住・自分のペースで進めたい → 宅配買取、と用途に応じて選ぶのがおすすめです。"),
        ("宅配買取の送料は自己負担ですか？",
         "ほとんどの大手買取業者では送料無料（着払い対応）です。ただしキャンセル時の返送料は自己負担になるケースが多いため、事前に約款を確認してください。"),
        ("出張買取は無料ですか？",
         "ヒカカク！・ウリエル・ティファナなど大手では出張料・査定料・キャンセル料すべて無料です。少額の楽器1点だけだと出張対象外になる業者もあるため、事前に最低買取金額を確認しましょう。"),
        ("店頭買取のメリットは何ですか？",
         "その場で査定・現金化が完了するスピード感が最大のメリットです。査定スタッフと直接話せるため、減額理由の確認や交渉もしやすく、複数店舗で相見積もりも可能です。"),
        ("どの買取方式が一番高く売れますか？",
         "方式自体に大きな価格差はなく、業者と楽器ジャンルの相性の方が重要です。同じ楽器でも複数業者で査定を取ると、最大2〜3倍の差が出ることもあります。"),
    ],
    "kougaku-satei-ranking": [
        ("どんな楽器が高額査定になりますか？",
         "ヴィンテージギター（Fender・Gibson 1970年代以前）、グランドピアノ（Steinway・Bösendorfer）、プロ仕様サックス・トランペット、楽器全般のヴィンテージモデルが高額査定の対象です。"),
        ("ヴィンテージギターは何年から価値が上がりますか？",
         "一般的に1970年以前の個体が「ヴィンテージ」と呼ばれ、特にFenderは1954〜1965年（プリCBS）、Gibsonは1959年バーストが最高値です。状態次第で100万円〜数千万円の査定がつきます。"),
        ("グランドピアノは買取してもらえますか？",
         "はい。SteinwayはモデルM/B/Dで200〜1,000万円、BösendorferのImperialで300〜800万円が買取相場です。運搬には専門業者が必要なため、ピアノ専門の買取業者へ依頼してください。"),
        ("どこのブランドが一番高く売れますか？",
         "弦楽器: Fender・Gibson・Martin・Gretsch、管楽器: Selmer・Yamaha・Yanagisawa、ピアノ: Steinway・Bösendorfer・Bechstein、ドラム: Gretsch・Ludwig・DWなどが高額査定ブランドの代表格です。"),
        ("古い楽器ほど高くなりますか？",
         "必ずしもそうではありません。ヴィンテージ価値があるのは「製造当時の品質が現代より優れていた」と評価されるブランドのみです。安価ブランドや量産モデルは古くても値段はつきにくいです。"),
    ],
    "mibunsho-hitsuyou": [
        ("楽器買取で身分証は必ず必要ですか？",
         "はい、必須です。古物営業法18条により、買取業者は対面・非対面を問わず本人確認義務があります。運転免許証・マイナンバーカード・パスポートが代表的な提示書類です。"),
        ("どの身分証が使えますか？",
         "顔写真付き身分証（運転免許証・マイナンバーカード・パスポート）が最も確実です。健康保険証は補助書類として使われ、住民票や公共料金領収書とセットで提示することが多いです。"),
        ("身分証の住所が現住所と違う場合はどうなりますか？",
         "現住所が記載された補助書類（公共料金領収書・住民票など）を一緒に提出すれば買取可能な業者が大半です。事前に業者へ問い合わせてください。"),
        ("出張買取でも身分証は必要ですか？",
         "はい。出張買取の際にスタッフが身分証を確認し、コピーまたは撮影します。これは古物営業法で義務付けられているため、どの業者でも例外なく行われます。"),
        ("身分証の提示を拒否するとどうなりますか？",
         "買取は成立しません。身分証提示なしで買取に応じる業者は違法業者の可能性が高く、後々トラブルに発展するため絶対に利用しないでください。"),
    ],
    "miseinen-baikyaku": [
        ("未成年でも楽器を売ることはできますか？",
         "18歳以上であれば親権者の同意書を用意することで売却可能です。18歳未満（中学生・高校生）は原則として買取不可で、保護者名義での取引が必要になります。"),
        ("親の同意書はどう書けばいいですか？",
         "「○○（買取業者名）における楽器買取に同意します」と本文、本人と親権者の氏名・住所・続柄・日付・押印を記載します。多くの業者がフォーマットを提供しているので事前にダウンロードしてください。"),
        ("未成年が黙って親の楽器を売るとどうなりますか？",
         "民法により親権者は契約取消権を行使でき、買取代金を返金して楽器を取り戻すことができます。発覚すると業者からブラックリスト登録され、損害賠償請求されることもあります。"),
        ("親が立ち会えば未成年でも売れますか？",
         "はい。親権者本人の身分証と立ち会いがあれば、ほとんどの業者で買取可能です。出張買取・店頭買取では親権者の同伴が最もスムーズです。"),
        ("18歳の誕生日を迎えれば自由に売れますか？",
         "2022年4月の成年年齢引下げにより、18歳から契約は原則自由ですが、買取業者によっては20歳未満に対して親権者同意を求めるケースもまだあります。事前に確認してください。"),
    ],
    "senmonten-vs-recycle": [
        ("楽器買取専門店とリサイクルショップ、どちらに売るべきですか？",
         "高値で売りたいなら楽器買取専門店、すぐに現金化したいならリサイクルショップがおすすめです。専門店の方が査定額は平均2〜3倍高くなる傾向があります。"),
        ("リサイクルショップの査定額が安いのはなぜですか？",
         "リサイクルショップは楽器の専門知識を持つスタッフが少なく、市場相場より安く見積もる傾向があります。また、再販ルートが限られているため利益率を確保するための低い買取になります。"),
        ("ハードオフでも楽器を売れますか？",
         "売れます。ハードオフは楽器に強いリサイクルショップで、ジャンク楽器も買い取ってくれます。ただし専門店と比べると査定額は安めなので、相場確認用に利用するのがおすすめです。"),
        ("どんな楽器なら専門店に持っていくべきですか？",
         "Fender・Gibson・Steinway・Selmerなどブランド品、ヴィンテージ品、10万円以上の中〜高額楽器は必ず専門店へ。エントリーモデルや汎用品はリサイクルショップでも大差ないことがあります。"),
        ("両方で査定してから決めても良いですか？",
         "むしろ推奨です。リサイクルショップ・楽器専門店・ヒカカク！の一括査定を併用し、最も高い査定額を選ぶのが買取金額を最大化するコツです。"),
    ],
    "satei-yomikata": [
        ("楽器査定書はどう読めばいいですか？",
         "①ブランド・モデル名、②シリアル番号、③本体査定額、④減額項目（傷・汚れ・付属品欠品など）、⑤付属品ボーナス、⑥最終買取金額、の順で記載されているのが一般的です。"),
        ("査定書に減額理由が書かれていない場合は？",
         "業者に必ず内訳を確認してください。「打痕：-5,000円」「ピックアップ動作不良：-10,000円」など項目別の減額理由を提示しない業者は信用度が低いため避けましょう。"),
        ("査定額の交渉はできますか？",
         "可能です。他社の査定書を提示すると「では合わせます」と再査定してくれるケースが多くあります。複数社で相見積もりを取り、最高値を提示する業者で売るのが基本戦略です。"),
        ("査定額に有効期限はありますか？",
         "多くの業者で7〜14日の有効期限があります。中古市場の価格変動を反映するためで、期限を過ぎると再査定が必要になります。"),
        ("査定書をもらえない業者は怪しいですか？",
         "正規業者であれば必ず査定明細を発行します。明細を渋る・口頭のみで進める業者は古物営業法違反の可能性があり、利用は避けるのが安全です。"),
    ],
}


def get_h1_title(content: str) -> str:
    """page.tsx から最初のh1タイトルを抽出"""
    m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if not m:
        return ""
    return m.group(1).strip()


def get_metadata_title(content: str) -> str:
    """page.tsx の metadata.title を抽出"""
    m = re.search(r'export const metadata[^{]*{[^}]*title:\s*"([^"]+)"', content, re.DOTALL)
    if m:
        return m.group(1)
    return ""


def build_breadcrumb_schema(slug: str, h1_title: str) -> dict:
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "ホーム", "item": f"{SITE_URL}/"},
            {"@type": "ListItem", "position": 2, "name": "記事一覧", "item": f"{SITE_URL}/articles/"},
            {"@type": "ListItem", "position": 3, "name": h1_title, "item": f"{SITE_URL}/articles/{slug}/"},
        ],
    }


def build_faq_schema(qa_list) -> dict:
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in qa_list
        ],
    }


SCHEMA_TAG_PATTERN = re.compile(
    r'(\s*)<script type="application/ld\+json" dangerouslySetInnerHTML=\{\{ __html: (?:JSON\.stringify\([^)]+\)|"(?:\\.|[^"\\])*") \}\} />'
)


def insert_schema_tags(content: str, new_scripts_jsx: str, schema_fn_name: str) -> str:
    """
    Schema関数のreturn内、最後の <script ld+json /> の直後に new_scripts_jsx を挿入する。
    関数が <>...</>フラグメントで包まれていない単一<script>の場合、フラグメント化する。
    new_scripts_jsx は <script ... /> タグ複数行（インデント込み）。
    """
    # まず Schema関数の本体を見つける
    fn_pat = re.compile(
        r'(function ' + re.escape(schema_fn_name) + r'\(\)\s*\{)(.*?)(\n\}\s*\n)',
        re.DOTALL,
    )
    m = fn_pat.search(content)
    if not m:
        raise RuntimeError(f"function {schema_fn_name}() が見つからない")
    fn_header = m.group(1)
    fn_body = m.group(2)
    fn_tail = m.group(3)

    # fn_body にフラグメント<>がなく、return ( <script .../> ) パターンの場合は要wrap
    has_fragment = "<>" in fn_body and "</>" in fn_body
    # script タグの数
    script_tags = list(SCHEMA_TAG_PATTERN.finditer(fn_body))
    if not script_tags:
        raise RuntimeError(f"function {schema_fn_name}() 内にld+json scriptタグが見つからない")

    if not has_fragment:
        # 単一script案件：return ( <script... /> ) を return ( <> <script... /> {new} </> ) に変換
        # まず既存scriptを<>でラップする
        new_body = fn_body
        # 最初のscript直前と最後のscript直後にfragmentタグを挿入
        first_script = script_tags[0]
        last_script = script_tags[-1]
        # 既存スクリプトのインデントを推定
        indent = first_script.group(1).strip("\n")
        if not indent:
            indent = "      "

        # body内オフセットを再計算
        before_first = new_body[:first_script.start()]
        scripts_block = new_body[first_script.start():last_script.end()]
        after_last = new_body[last_script.end():]

        # before_first末尾の "return (" の直後に改行＋"<>"を入れる。
        # 簡単のため: scripts_block の前に "<>" を入れ、後ろに "</>" を入れる
        # ただし first_script.group(1) は先頭の空白＋改行を含むため、それを利用
        new_body = (
            before_first
            + first_script.group(1)  # 改行＋インデント
            + "<>"
            + scripts_block.lstrip()  # 元のスクリプト
            + new_scripts_jsx  # 追加スクリプト
            + first_script.group(1)  # 同じインデント
            + "</>"
            + after_last
        )

        new_content = content[:m.start()] + fn_header + new_body + fn_tail + content[m.end():]
        return new_content

    # フラグメント済みの場合：最後のscriptタグの直後に挿入
    last_match = script_tags[-1]
    insert_pos_in_body = last_match.end()
    fn_body_start_in_content = m.start(2)
    abs_pos = fn_body_start_in_content + insert_pos_in_body

    return content[:abs_pos] + new_scripts_jsx + content[abs_pos:]


def detect_schema_function(content: str):
    """記事の Schema 関数名を判定（Schema or FaqSchema）"""
    if re.search(r'function FaqSchema\(\)', content):
        return "FaqSchema"
    if re.search(r'function Schema\(\)', content):
        return "Schema"
    return None


def script_tag_jsx(indent: str, schema_obj: dict) -> str:
    """schemaオブジェクトを JSON.stringify済の<script>タグJSX文字列にする"""
    # JSON.stringify相当：JSONを文字列リテラルに埋め込む
    json_str = json.dumps(schema_obj, ensure_ascii=False)
    # JSXで安全に埋め込むため、" を \" にエスケープ、バックスラッシュも処理
    escaped = json_str.replace('\\', '\\\\').replace('"', '\\"')
    return f'\n{indent}<script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: "{escaped}" }}}} />'


def process_article(article_dir: Path, dry_run: bool = False) -> dict:
    slug = article_dir.name
    page_file = article_dir / "page.tsx"
    content = page_file.read_text(encoding="utf-8")

    h1_title = get_h1_title(content)
    if not h1_title:
        return {"slug": slug, "status": "skip", "reason": "h1 not found"}

    schema_fn = detect_schema_function(content)
    if not schema_fn:
        return {"slug": slug, "status": "skip", "reason": "Schema function not found"}

    actions = []

    # 1. BreadcrumbList チェック・追加
    has_breadcrumb = "BreadcrumbList" in content
    breadcrumb_obj = build_breadcrumb_schema(slug, h1_title) if not has_breadcrumb else None

    # 2. FAQPage チェック・追加（10記事のみ）
    has_faq = "FAQPage" in content
    faq_obj = None
    if not has_faq and slug in FAQ_DATA:
        faq_obj = build_faq_schema(FAQ_DATA[slug])

    if not breadcrumb_obj and not faq_obj:
        return {"slug": slug, "status": "ok", "reason": "already has all schemas"}

    # 既存の最後の<script>のインデントを取得
    fn_pat = re.compile(
        r'function ' + re.escape(schema_fn) + r'\(\)\s*\{(.*?)\n\}\s*\n',
        re.DOTALL,
    )
    m = fn_pat.search(content)
    fn_body = m.group(1)
    last_match = None
    for mm in SCHEMA_TAG_PATTERN.finditer(fn_body):
        last_match = mm
    if not last_match:
        return {"slug": slug, "status": "skip", "reason": "no existing ld+json script in Schema fn"}
    indent = last_match.group(1).lstrip("\n").rstrip()
    if not indent:
        indent = "      "

    new_jsx = ""
    if breadcrumb_obj:
        new_jsx += script_tag_jsx(indent, breadcrumb_obj)
        actions.append("BreadcrumbList")
    if faq_obj:
        new_jsx += script_tag_jsx(indent, faq_obj)
        actions.append("FAQPage")

    new_content = insert_schema_tags(content, new_jsx, schema_fn)

    if not dry_run:
        page_file.write_text(new_content, encoding="utf-8")

    return {"slug": slug, "status": "modified", "actions": actions, "h1": h1_title}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--only", help="特定slugだけ処理")
    args = parser.parse_args()

    if not ARTICLES_DIR.exists():
        print(f"記事ディレクトリが見つからない: {ARTICLES_DIR}", file=sys.stderr)
        sys.exit(1)

    article_dirs = sorted([d for d in ARTICLES_DIR.iterdir() if d.is_dir()])
    if args.only:
        article_dirs = [d for d in article_dirs if d.name == args.only]
        if not article_dirs:
            print(f"slug not found: {args.only}", file=sys.stderr)
            sys.exit(1)

    results = []
    for d in article_dirs:
        try:
            r = process_article(d, dry_run=args.dry_run)
            results.append(r)
        except Exception as e:
            results.append({"slug": d.name, "status": "error", "error": str(e)})

    modified = [r for r in results if r["status"] == "modified"]
    skipped = [r for r in results if r["status"] == "skip"]
    errors = [r for r in results if r["status"] == "error"]
    ok = [r for r in results if r["status"] == "ok"]

    print(f"=== 結果サマリ ===")
    print(f"合計: {len(results)}")
    print(f"変更: {len(modified)}")
    print(f"既に対応済み: {len(ok)}")
    print(f"スキップ: {len(skipped)}")
    print(f"エラー: {len(errors)}")
    if args.dry_run:
        print("(DRY RUN: 実ファイルは変更してません)")

    if modified:
        print("\n=== 変更した記事 (最初の5件) ===")
        for r in modified[:5]:
            print(f"  {r['slug']}: {', '.join(r['actions'])} (h1='{r['h1']}')")

    if skipped:
        print("\n=== スキップした記事 ===")
        for r in skipped:
            print(f"  {r['slug']}: {r['reason']}")

    if errors:
        print("\n=== エラー ===")
        for r in errors:
            print(f"  {r['slug']}: {r['error']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
