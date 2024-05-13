


export function Item({name , isPacked}){
console.log(name)

    if (isPacked) {
        return <li className="item">{name} ✔</li>;
      }
      return <li className="item">{name}</li>;

}