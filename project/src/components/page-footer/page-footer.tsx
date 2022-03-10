type FooterProps = {
  children: JSX.Element;
};

function Footer({ children }: FooterProps): JSX.Element {
  return (
    <footer className="page-footer">
      {children}
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
