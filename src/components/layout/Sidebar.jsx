import '/src/styles/Sidebar.css'
import SidebarItem from './SidebarItem'
import SidebarItems from '/src/data/SidebarItems.json'
function Sidebar(){
    return(
        <aside className='Sidebar ul li'>
            <ul>
               {SidebarItems.map((item) =>(
                <SidebarItem
                    key = {item.id}
                    content={item.content}
                />
               ))}
            </ul>
        </aside>
    )
}


export default Sidebar;