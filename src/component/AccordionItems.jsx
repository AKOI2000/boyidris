export default function AccordionItems({
  index,
  title,
  curOpen,
  onOpen,
  children,
  stack
}) {
  const isOpen = curOpen === index;
  function handleClick() {
    onOpen(isOpen ? null : index);
  }

  return (
    <>
      {stack.length < 1 ? (
        <div
          className={`item ${isOpen ? "open" : "close"}`}
          onClick={handleClick}
        >
          <div className="header-box">
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
          </div>

          <div className="content-box">{children}</div>
        </div>
      ) : (
        <div
          className={`item ${isOpen ? "open" : "close"}`}
          onClick={handleClick}
        >
          <div className="header-box">
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
          </div>

          <div className="content-box"> 
            {children}
            <div className="stack">
            {stack.map(tool => (
               <div className="img-box">
                 <img src={tool} alt="" />
               </div>
                ))}
          </div>

          </div>
        </div>
      )}
    </>
  );
}
