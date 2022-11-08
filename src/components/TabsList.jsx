import Tab from "./Tab"

const TabsList = ( { tabs, nameLength } ) => {
  return (
    <div className="tabslist">
      {tabs.map(tab => <Tab key={tab.title} tab={tab} nameLength={nameLength}/>)}
    </div>
  )
}

export default TabsList;