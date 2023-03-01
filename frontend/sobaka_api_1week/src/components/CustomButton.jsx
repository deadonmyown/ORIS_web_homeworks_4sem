const CustomButton = ({ value, onClick }) => {

    // const obj = {
    //     id: 1,
    //     name: "Lox"
    // };

    // const obj2 = {
    //     id:2,
    //     name: "chel"
    // }

    // const obj3 = {...obj, ...obj2};

    // const {id} = obj;

    return <button onClick={onClick}>{value}</button>
}

export default CustomButton;