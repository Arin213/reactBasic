import chefImg from "/chef-claude-icon.png"

export default function Header() {
  // console.log({...img});
  // const {id, img} = props;
  return (
    <header className="header-container">
      <div className="img-container">
        <img
          src={chefImg} alt="chef-cluade"
        />
        <span className="text-name">Chef Claude</span>
      </div>
    </header >
  )
}