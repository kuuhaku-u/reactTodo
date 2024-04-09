const ImpureHeading = ({ label, count = 0 }: any) => {

    console.log("IMPURE COMP");
    
    return (
        <div>
            <h6>{label}</h6>
            <span>{count}</span>
        </div>
    );
};

export default ImpureHeading;
