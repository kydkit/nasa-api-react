// import NasaData from './NasaData'

const NasaCard = ({ info }) => {
  return (
    <div>
      <img src={info.url} alt=""/>
      <p>{info.title}</p>
    </div>
  );
}

export default NasaCard;