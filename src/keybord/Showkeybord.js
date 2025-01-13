import SingleLetter from "./SingleLetter"

const Showkeybord = ({ letters, size}) => {
    return (
      <div style={{flexWrap:"wrap"}}>
        {letters.map((singleLetter) => (
          <SingleLetter
            singleLetter={singleLetter}
            size={size}
          />
        ))}
      </div>
    );
  };
  
  export default Showkeybord;