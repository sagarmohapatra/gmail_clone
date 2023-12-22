import {
    Photo, StarOutline, SendOutlined, InsertDriveFileOutlined,
    DeleteOutlined, MailOutlined
} from '@mui/icons-material';

const SIDEBAR_DATA = [
    {
        name: "inbox",
        title: "inbox",
        icon: Photo

    },
    {
        name: "starred",
        title: "starred",
        icon: StarOutline

    },
    {
        name: "sent",
        title: "sent",
        icon: SendOutlined

    }, 
    {
        name: "drafts",
        title: "drafts",
        icon: InsertDriveFileOutlined

    },
    {
        name: "bin",
        title: "bin",
        icon: DeleteOutlined

    },
    {
        name: "allmails",
        title: "allmails",
        icon: MailOutlined

    },

]
export default SIDEBAR_DATA