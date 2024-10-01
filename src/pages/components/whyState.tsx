import { sculptureList } from '../../data/data';

export default function Gallery() {
  let index = 0;

  function handleClick() { // handles click and should show the next image
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  // needs to be refreshed the page -- rerender the component - need state to be updated
  return (
    <>
      <button onClick={handleClick}> 
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}