import CustomButton from "../components/CustomButton";

const GroupActionButton = () => {
    return (
        <>
            <CustomButton value="1" onClick={() => alert("1")} />
            <CustomButton value="2" onClick={() => alert("3")} />
            <CustomButton value="1" onClick={() => alert("1")} />
        </>
    )
}

export default GroupActionButton;