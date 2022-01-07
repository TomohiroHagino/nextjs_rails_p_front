export const HTMLComponent = ({ children }) => {

  const body = children.replace(/\n/g, '<br />');

  // dagerouslySetInnderHTMLに渡すため __html をキーに持つオブジェクトへ変換する処理
  const createMarkup = (htmlContents) => {
  // 念の為のチェック
  if (!htmlContents) {
    return;
    }
  return { __html: htmlContents };
  }

  return (
    <p dangerouslySetInnerHTML={createMarkup(body)}></p>
  );
}