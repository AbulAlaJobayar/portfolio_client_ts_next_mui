

// icons
import EditNoteIcon from '@mui/icons-material/EditNote';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddTaskIcon from '@mui/icons-material/AddTask';
export const drawerItems = (role:string)=> {
  const defaultMenu=[
    {
    
      title: "Create blog",
      path: `${role}/blog`,
      icon: EditNoteIcon,
    
  },
    {
    
      title: "Create Projects",
      path: `${role}/projects`,
      icon: AssignmentTurnedInIcon,
    
  },
    {
    
      title: "Create Skill",
      path: `${role}/skill`,
      icon: AddTaskIcon,
    
  },
    {
    
      title: "Create Experience",
      path: `${role}/experience`,
      icon: LibraryAddIcon,
    
  },
]

  return [...defaultMenu];
};
