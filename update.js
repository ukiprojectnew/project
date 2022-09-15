//backend connect
document.addEventListener('DOMContentLoaded', function (){
var form = document.getElementById('form');
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    var StudentId = document.getElementById('StudentId').value
    var StudentName = document.getElementById('StudentName').value
    var ChemistryMarks = document.getElementById('ChemistryMarks').value
    var PhysicsMarks = document.getElementById('PhysicsMarks').value
    var BiologyMarks = document.getElementById('BiologyMarks').value


     //update

    const updat= fetch("http://localhost:3004/update/1", {
        method: "put",
        body: JSON.stringify({
            StudentId: StudentId,
            StudentName: StudentName,
            ChemistryMarks: ChemistryMarks,
            PhysicsMarks: PhysicsMarks,
            BiologyMarks: BiologyMarks


        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

    })

        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })

})
});
