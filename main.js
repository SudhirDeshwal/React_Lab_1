//Const Variable for header
const TaskList_header = (props)=> {

      return (
           <div> 
            <h4>{props.heading} </h4>
            <h4>Total Number of Tasks : {props.items}</h4>
           </div>
           
           );
        }

//Const Variable for list blocks
const Task_blocks_list = (props) => {

                return (
                     <div> 
                    <h4>{props.heading} </h4>
                      <ul> 
                             <li>{props.item1}</li>
                             <li>{props.item2}</li>
                             <li>{props.item3}</li>
                      </ul>
                     </div>
                     
                     );
                  }
//Storing components in one variable
     var app = (
        <div>
         <TaskList_header heading="Task List" items="9"/>
         <Task_blocks_list heading="Humber" item1="Task1" item2="Task2" item3="Task3"/>
         <Task_blocks_list heading="MERN" item1="Lab" item2="Project" item3="Quiz"/>
         <Task_blocks_list heading="Java"item1="Group Discussion" item2="Exam" item3="Assignment"/>
         </div>
             );

//Appending variable into the DOM
    ReactDOM.render(app , document.getElementById("root"));

    