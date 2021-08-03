import Link from 'next/link'
import styled from 'styled-components'
import { Head } from "next/document";

<!-- next-link-passhref -->

const RedLink = styled.a`
  color: red;
`
function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href}>
      <RedLink>{name}</RedLink>
    </Link>
  )
}
export default NavLink

<!-- next-no-css-tags -->
export class NavBar extends Head {
  render() {
    return (
      <div>
        <h1>Hello title</h1>
        <link href="/_next/static/css/styles.css" rel="stylesheet" />
      </div>
    );
  }
}
