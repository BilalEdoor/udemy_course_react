import './App.css';
import React from 'react';
import Header from "./Componants/Header";
import Post from './Componants/Post';
import Tags from './Componants/Tags';
function App() {
  const persons = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      birthday: "1990-04-15",
      company: "TechCorp",
      title: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      birthday: "1985-07-22",
      company: "Innovate Inc",
      title: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      birthday: "1992-03-10",
      company: "Designify",
      title: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Dana White",
      email: "dana.white@example.com",
      birthday: "1988-11-05",
      company: "HealthFirst",
      title: "HR Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Evan Davis",
      email: "evan.davis@example.com",
      birthday: "1995-06-17",
      company: "CodeWorks",
      title: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Fiona Green",
      email: "fiona.green@example.com",
      birthday: "1987-09-03",
      company: "MarketEdge",
      title: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "George King",
      email: "george.king@example.com",
      birthday: "1991-01-25",
      company: "BuildIt Ltd",
      title: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Hannah Lee",
      email: "hannah.lee@example.com",
      birthday: "1993-05-30",
      company: "NextGen AI",
      title: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "Ian Wright",
      email: "ian.wright@example.com",
      birthday: "1984-08-14",
      company: "CyberSecure",
      title: "Cybersecurity Analyst",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Jenna Taylor",
      email: "jenna.taylor@example.com",
      birthday: "1996-02-20",
      company: "GreenEnergy Co",
      title: "Environmental Engineer",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ];
  
  const buttonFunctions = [
    { label: "Save", action: () => alert("Saved!") },
    { label: "Edit", action: () => alert("Editing...") },
    { label: "Delete", action: () => alert("Deleted!") },
    { label: "Share", action: () => alert("Shared!") },
    { label: "Download", action: () => alert("Downloading...") },
    { label: "Upload", action: () => alert("Uploading...") },
    { label: "Preview", action: () => alert("Previewing...") },
    { label: "Print", action: () => alert("Printing...") },
    { label: "Refresh", action: () => alert("Refreshing...") },
    { label: "Close", action: () => alert("Closed!") }
  ];
  
  return (
    <div className="App">
      <Header />
      <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col gap-4">           
         {persons.map((user)=> {
                return (
                  <Post user={user}/>
                )
              }) 
            }

           
        </div>
        {
         buttonFunctions.map((btn)=>{
           return (
            <Tags btn ={btn}/>
           )
         }) 
        }
       
        </div>

    </div>
  );
}

export default App;
