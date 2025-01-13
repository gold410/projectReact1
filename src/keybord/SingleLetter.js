
const SingleLetter = ({ singleLetter, size, }) => {
    return (
      <span
        style={{
          color: singleLetter.color,
          backgroundColor:singleLetter.backColor,
          fontFamily: singleLetter.font,
          fontSize: `${size}px`,
          fontWeight: singleLetter.bold,
          textDecoration: singleLetter.isUnderline,
        }}
      >
        {singleLetter.letter}
      </span>
    );
  };
  
  export default SingleLetter;

    
