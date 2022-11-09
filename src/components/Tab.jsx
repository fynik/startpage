const Tab = ( { tab, nameLength } ) => {
  return (
    <div className="tab">
      <h4>{tab.title}</h4>
      <hr />
      <div>
        {tab.items.map(item => {
            const name = item.name.length < nameLength
              ? item.name
              : item.name.slice(0, nameLength-2).concat("...");
            return <p key={item.name}><a className="link" href={item.link}>{name}</a></p>
          })
        }
      </div>
    </div>
  )
}

export default Tab;