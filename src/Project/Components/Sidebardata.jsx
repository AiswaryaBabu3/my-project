import React from "react";
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'



export const Sidebardata = [
    {
        title: "Dashboard",
        path: "/home",
        icons:<AiIcons.AiFillDashboard/>,
        
    },
    {
        title: "Catalog",
        icons: <AiIcons.AiFillDashboard />,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        subNav: [
            {
                title: "Categories",
                path: "/home/catalog/categories",
                icons: <MdIcons.MdKeyboardDoubleArrowRight />,
            },
            {
                title: "Products",
                path: "/home/catalog/products",
                icons: <MdIcons.MdKeyboardDoubleArrowRight />,
            }
        ]
    },    
    {
        title: "Design",
        icons:<RiIcons.RiComputerLine/>,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        subNav: [
            {
                title: "Layout",
                path: "/home/design/layout",
                icons:<MdIcons.MdKeyboardDoubleArrowRight/>, 
            },
            {
                title: "Theme Editor",
                path: "/home/design/themeeditor",
                icons:<MdIcons.MdKeyboardDoubleArrowRight/>, 
            }
        ]
    },
    {
        title: "Sales",
        icons:<BsIcons.BsFillCartFill/>,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        subNav: [
            {
                title: "Orders",
                path: "/home/sales/orders",
                icons:<MdIcons.MdKeyboardDoubleArrowRight/>, 
            },
            {
                title: "returns",
                path: "/home/sales/returns",
                icons:<MdIcons.MdKeyboardDoubleArrowRight/>, 
            }
        ]
    },
    {
        title: "Customer",
        icons:<BsIcons.BsFillPersonFill/>,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        subNav: [
            {
                title: "Customer",
                path: "/home/customer/customer",
                icons:<MdIcons.MdKeyboardDoubleArrowRight/>, 
            },
            {
                title: "Customer Group",
                path: "/home/customer/customergroup",
                icons:<MdIcons.MdKeyboardDoubleArrowRight/>, 
            }
        ]
    },

]