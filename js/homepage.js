window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHTML();
}
);

const createInnerHTML =()=>{
    const headerHTML=" <th></th><th>Name</th><th>Gender</th><th>Departments</th><th>Salary</th><th>StartDate</th>";
    const innerHTML=` ${headerHTML}
    <tr>
                      
                  </tr>
                  <tr>
                      <td><img class="profile" src="../assets/emp1.png"></td>
                      <td>Sameer</td>
                      <td>Male</td>
                      <td><div class='dept-label'>Engineering</div>
                      <div class ='dept-label'>Finance</div></td>
                      <td>30000</td>
                      <td>1 Nov 2020</td>
                      <td>
                          <img id="1" onclick="remove(this)" alt="delete" src="../assets/delete-black-18dp.svg">
                          <img id="1" onclick="update(this)" alt="edit" src="../assets/create-black-18dp.svg">
                      </td>
                  </tr>
    `;
    document.querySelector('#display').innerHTML=innerHTML;
}