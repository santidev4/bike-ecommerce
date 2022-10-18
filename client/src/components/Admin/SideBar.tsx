import { Link } from "react-router-dom"
import { SideBarContainer } from "../styles/Admin/SideBarContainer.styled"

function SideBar() {
  return (
    <SideBarContainer>
      <ul>
        <li><Link to='/admin/edit'>Edit Products</Link></li>
        <li><Link to='/admin/clients'>Clients</Link></li>
        <li><Link to='/admin/orders'>Orders</Link></li>
      </ul>
    </SideBarContainer>
  )
}

export default SideBar