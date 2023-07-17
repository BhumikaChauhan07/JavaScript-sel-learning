// While loop- loop variable is declared outsideupdation of loop variable is done inside body. Body is not executed even once when lopp condition is not staisfied. entry control loop
let i = 1;
while(i<=5)
{   
    console.log(i);
    i++;
}

//for loop - loop varibale is declared and updated along with the condition statement. Body is not executed even once when loop condition is not staisfied. entry control loop
for(let j =0; j<=5;j++)
{
    console.log(j); 
}
    //console.log(j);            // Not accessible outside loop,j is a loop variable so its scope is within for block when declared with let loop variable scope remains the 
    
// scope of variables using var declaration
for(var k =-5; k<=0;k++)
{
    console.log(k); 
}
console.log(k);            // accessible outside loop,k is a loop variable with default scope within for block, when declared with var loop variable scope gets exetended outside the for block
     
// break keyword is used to purposely stop execution of looping constructs or switch blocks even when loop variable satisfies loop condition
for( k =0; k<=5;k++)
{
    if(k==3)
        break;
    console.log(k); 
}

// continue keyword skips the execution of rest of block for that value and updates the value of loop variable
for( k =0; k<=5;k++)
{
    if(k==3)
        continue;
    console.log(k); 
}

//do while loop - works same as while but body is executed once when loopcondition is not staisfied as condition is checked at exit. exit control loop
k = 55;
do
{   console.log(k); 
}while(k!==55)

