let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHTML();
}
);
const getEmployeePayrollDataFromStorage = () => {
    let employeePayrollList = createEmployeePayrollJSON();
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
    return localStorage.getItem('EmployeePayrollList') ? 
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];  
  }
  

const createInnerHTML =()=>{
    const headerHTML=" <th></th><th>Name</th><th>Gender</th><th>Departments</th><th>Salary</th><th>StartDate</th>";
    let innerHTML=`${headerHTML}`;
    for(const employeePayrollData of empPayrollList ){
        innerHTML=` ${innerHTML}
                      <tr>
                          <td><img class="profile" src="${employeePayrollData._profilePic}"></td>
                          <td>${employeePayrollData._name}</td>
                          <td>${employeePayrollData._gender}</td>
                          <td><div class='dept-label'>${getDeptHtml(employeePayrollData._department)}</div>
                          <td>${employeePayrollData._salary}</td>
                          <td>${employeePayrollData._salary}</td>
                          <td>
                              <img id="1" onclick="remove(this)" alt="delete" src="../assets/delete-black-18dp.svg">
                              <img id="1" onclick="update(this)" alt="edit" src="../assets/create-black-18dp.svg">
                          </td>
                      </tr>
        `;
    
        document.querySelector('#display').innerHTML=innerHTML;
    }  
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {       
        _name: 'Harish',
        _gender: 'male',
        _department: [
            'Engineering',
            'Finance'
        ],
        _salary: '500000',
        _startDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: '../assets/emp1.png'
      },
      {
        _name: 'Savita',
        _gender: 'female',
        _department: [
            'Sales'
        ],
        _salary: '400000',
        _startDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: '../assets/emp4.png'
      }
    ];
    return empPayrollListLocal;
  }
  const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }