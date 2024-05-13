function Cup({ guest }) {
    return <p>Tea cup for guest #{guest}</p>;
  }
  
  export default function TeaSet() {
    return (
      <div>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
        </div>
    );
  }