import React from 'react';
import styles from '../assets/styles/styles';

import { Text, View, Image, FlatList } from 'react-native';
import { flashGrey, shoppingCardGrey, startGold, shoppingCardGold, arrowBlackRight } from '../assets/icons/icon';
import { demo } from '../assets/data/lists';
import { userDummy } from '../assets/images/image';

import { SearchBar } from 'react-native-elements';

const ListItem = ({
    isSearchBar,
    isDemo,
    listType
}) => {
    const [search, setSearch] = React.useState('');
    const [filteredDataSource, setFilteredDataSource] = React.useState([]);
    const [masterDataSource, setMasterDataSource] = React.useState([]);

    React.useEffect(() => {
        if (isDemo) {
            setFilteredDataSource(demo);
            setMasterDataSource(demo);
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts')
            fetch(demo)
                .then((response) => response.json())
                .then((_responseJson) => {
                    setFilteredDataSource(demo);
                    setMasterDataSource(demo);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    const searchFilterFunction = (text: React.SetStateAction<string>) => {
        /**
         * @type {{name:string}|null}
         * @type {{age:number}|null}
         * @type {{profession:string}|null}
         * @type {{distance:number}|null}
         * @type {{city:string}|null}
         */
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name ? item.age ? item.profession ? item.distance ? item.city : '' : '' : '' : '';
                const textData = text;
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <>
                {listType === 0 && ( //ListCandidate
                    <View style={{ flexDirection: "row", height: 70, paddingVertical: 10, paddingLeft: 15 }}>
                        <Image source={userDummy} style={[styles.userDummy]}></Image>
                        <Text style={styles.itemStyle} >
                            {item.profession}
                        </Text>
                        <Text style={styles.itemStyleTwo} > {item.city}, {item.distance}Km, </Text>
                        <Image source={flashGrey} style={[styles.btnFont]}></Image>
                    </View>
                )}
                {listType === 1 && ( //ListOffers
                    <View style={{ flexDirection: "row", height: 60, paddingVertical: 10 }}>
                        <Text style={styles.itemStyle} >
                            {item.profession}
                        </Text>
                        <Text style={styles.itemStyleTwo}> {item.city}, {item.distance}Km, </Text>
                        <Image source={startGold} style={[styles.btnFont]}></Image>
                        <Image source={shoppingCardGold} style={[styles.btnFont]}></Image>
                        <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                    </View>
                )}
                {listType === 2 && ( //ListFavorites
                    <View style={{ flexDirection: "row", height: 70, paddingVertical: 10, paddingLeft: 0 }}>
                        <Image source={userDummy} style={[styles.btnFont]}></Image><Text style={styles.itemStyle}>
                            {item.name}, {item.age}
                        </Text>
                        <Text style={styles.itemStyleTwo}>
                            {item.profession}
                        </Text>
                        <Text style={styles.itemStyleTwo}> {item.city}, {item.distance}Km </Text>
                        <Image source={flashGrey} style={[styles.btnFont]}></Image>
                        <Image source={shoppingCardGrey} style={[styles.btnFont]}></Image>
                    </View>
                )}
                {listType === 3 && ( //ListFavorites
                    <View style={{ flexDirection: "row", height: 70, paddingVertical: 10, paddingLeft: 0 }}>
                        <Image source={userDummy} style={[styles.btnFont]}></Image>
                        <Text style={styles.itemStyle}>
                            Elena Sanchez, 23
                        </Text>
                        <Text style={styles.itemStyleTwo}>
                            Cocinero
                        </Text>
                        <Text style={styles.itemStyleTwo}>
                            Barcelona, 25Km
                        </Text>
                        <Image source={flashGrey} style={[styles.btnFont]}></Image>
                    </View>
                )}
            </>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item: { id: string; title: string; }) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <>
            {isSearchBar && (
                <SearchBar
                    round
                    containerStyle={{ backgroundColor: '#fff' }}
                    inputStyle={{ backgroundColor: '#fff' }}
                    inputContainerStyle={{ backgroundColor: '#fff', borderColor: '#000' }}
                    searchIcon={{ size: 24, type: 'material' }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={() => searchFilterFunction('')}
                    placeholder="Buscar (Posición, Edad...)"
                    value={search}
                />
            )}
            {/* <ScrollView style={styles.scrollViewTwo}> */}
            <FlatList
                data={filteredDataSource}
                keyExtractor={(_item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
        </>
    );
};

export default ListItem;
