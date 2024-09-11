import React, {useState, useMemo} from 'react'

function Memo() {

    const [cOne, setCOne] = useState(0);
const [cTwo, setCTwo] = useState(0);

    function handleCOne() {
        setCOne(cOne + 1);
        console.log('COne increased');
    }   
    function handleCTwo() {
        setCTwo(cTwo + 1);
        console.log('CTwo increased');
    }     

const isEven = useMemo(() => {
    let i = 0;
    while(i< 200000000)
        i++;

    return (cOne%2 == 0);

},[cOne])

  return (
    <div>
        <div>
            <button onClick={handleCOne}>Count One - {cOne}</button>
            {/* { (cOne%2 == 0) ? 'Even' : 'Odd'} */}
            { isEven ? 'Even' : 'Odd'}
        </div>
        <div>
            <button onClick={handleCTwo}>Count Two - {cTwo}</button>
        </div>
    </div>
  )
}

export default Memo