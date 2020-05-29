function TaskList_header(props) {

      return (
           <div className = 'Tasks'> 
            <h1>{props.heading} </h1>
            <h3> Number of Tasks : {props.items}</h3>
           </div>
           
           );
        }


        
        function Task_blocks(props) {

            return (
                 <div className = 'blocks'> 
                  <h4>{props.block_heading} </h4>
                  <ul> 
                         <li>{props.item1}</li>
                         <li>{props.item2}</li>
                         <li>{props.item3}</li>
                  </ul>
                  
                 </div>
                 
                 );
              }

     var app = (
        <div>
         <TaskList_header heading="Task List"  items="9"></TaskList_header>
         <Task_blocks block_heading="Humber" item1="Task1" item2="Task2" item3="Task3"></Task_blocks>
         <Task_blocks block_heading="MERN" item1="Lab" item2="Project" item3="Quiz"></Task_blocks>
         <Task_blocks block_heading="Java" item1="Group Discussion" item2="Exam" item3="Assignment"></Task_blocks>
         </div>
             );

    ReactDOM.render(app , document.getElementById("root"));

    