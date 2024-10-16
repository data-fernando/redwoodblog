import { Link, routes } from "@redwoodjs/router"

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
  <>
<header>


        <h1>Redwood Blog Layout</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
        <p>_________________________________________________________________________</p>
        <br />
      </header>
      <main>{children}</main>



<footer >
  <p>___________________________________________________________________________________________</p>

        <div>
          <p>&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
          <p>Síguenos en:
            <a href="https://www.facebook.com">Facebook</a> |
            <a href="https://www.twitter.com">Twitter</a> |
            <a href="https://www.instagram.com">Instagram</a>

          </p>
          <p><a href="/privacy-policy">Política de Privacidad</a> | <a href="/terms-of-service"
          >Términos de Servicio</a></p>
        </div>

</footer>

  </>
  )




}

export default BlogLayout
