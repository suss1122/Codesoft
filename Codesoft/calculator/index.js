var buttons=document.getElementsByClassName('button1');
var displaybox=document.getElementById('display-content');
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=='+')
        {
            operator='+';
            operand1=parseFloat(displaybox.textContent);
            displaybox.innerText='';
            //displaybox.innerText='+';
            //displaybox.innerText='';
        }
        else if(value=='-')
        {
            operator='-';
            operand1=parseFloat(displaybox.textContent);
            displaybox.innerText='';
           // displaybox.innerText='-';
           // displaybox.innerText='';
        }
        else if(value=='/')
        {
            operator='/';
            operand1=parseFloat(displaybox.textContent);
            displaybox.innerText='';
            //displaybox.innerText='/';
            //displaybox.innerText='';
        }
        else if(value=='%')
        {
            operator='%';
            operand1=parseFloat(displaybox.textContent);
            displaybox.innerText='';
            //displaybox.innerText='%';
            //displaybox.innerText='';
        }
        else if(value=='*')
        {
            operator='*';
            operand1=parseFloat(displaybox.textContent);
            displaybox.innerText='';
            //displaybox.innerText='*';
            //displaybox.innerText='';
        }
        else if(value=='=')
        {
            operand2=parseFloat(displaybox.textContent);
            var result=eval(operand1+""+operator+""+operand2);
            displaybox.innerText=result;
        }
        else if(value=='ac')
        {
            operand1=0;
            operand2=null;
            displaybox.innerText="";
        }
        else{
            
            displaybox.innerText+=value;
        }
     });
}
    var dis;
    document.addEventListener('keypress',function(events){
        dis=events.key;
        console.log(dis);
        if(dis=='+'||dis=='*'||dis=='%'||dis=='/')
        {
            operator=dis;
            operand1=parseFloat(displaybox.textContent);
            displaybox.innerText="";
        }
        //for back-space not work 
        // else if(dis=='b')
        // {
        //     var back=parseFloat(displaybox.textContent);
        //     back=back/10;
        //     displaybox.innerText=back;
        // }
        // <p>
        //     th<b>
        //         back-bak

        //     </b>
        //     else if(
        //         dis==bis;

        //     )
        // </p>
        else if(dis=='='||dis=='Enter')
        {
            operand2=parseFloat(displaybox.textContent);
            var result=eval(operand1+""+operator+""+operand2);
            displaybox.innerText=result;
        }
        else{
        displaybox.innerText+=dis;
        }        
    });