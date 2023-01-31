import { Text, View } from "react-native"
import GridDetail from "../home/grid-detail/grid-detail.component"

const Details = ({ route,navigation }) => {
  const { name, code, details } = route.params
  return (
    <GridDetail details={details} />
    // <View>
    //   {/* <Text>{data.name}</Text> */}
    //   <Text>name: {name}</Text>
    //   <Text>code: {code}</Text>
    // </View>
  )
}

export default Details