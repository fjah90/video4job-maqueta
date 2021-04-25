import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

export const PRIMARY_COLOR = "#FF689A";
export const SECONDARY_COLOR = "#FF8960";
export const WHITE = "#FFFFFF";
export const WHITE_TRANSPARENT = "#ffffff33";
export const GRAY_CERO = "#E6E6E6";
export const GRAY_ONE = "#707070";
export const GRAY_TWO = "#8E8E8E";
export const BLUE_SKY = "#3796F0";
export const DARK_GRAY = "#676666";
export const BLACK = "#020202";
export const BLACK_TWO = "#262628";
export const BLACK_TRANSPARENT = "#02020233";
export const FB_BLUE = '#4267B2';
export const GG_RED = '#de5246'
export const ONLINE_STATUS = "#46A575";
export const OFFLINE_STATUS = "#D04949";

export const STAR_ACTIONS = "#EAA445";
export const LIKE_ACTIONS = "#B644B2";
export const DISLIKE_ACTIONS = "#363636";
export const FLASH_ACTIONS = "#5028D7";

export const ICON_FONT = "tinderclone";

export const DIMENSION_WIDTH: any = Dimensions.get("window").width;
export const DIMENSION_HEIGHT: any = Dimensions.get("window").height;
export const STATUSBAR_HEIGHT: any = StatusBar.currentHeight;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // top: STATUSBAR_HEIGHT,
    },
    btnContainerLogin: {
        zIndex: 1,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: STATUSBAR_HEIGHT * 11,
        backgroundColor: 'transparent',
    },
    btnContainer: {
        zIndex: 1,
        width: '100%',
        position: 'absolute',
        left: 0,
        backgroundColor: 'transparent',
        top: DIMENSION_HEIGHT / 1.15,
    },
    cardContainer: {
        zIndex: 1,
        position: "relative",
        // paddingVertical: 10,
        paddingHorizontal: 10,
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT,
        backgroundColor: "transparent",
    },
    btnContainerTwo: {
        zIndex: 1,
        position: "relative",
        borderRadius: 10,
        padding: 10,
        width: "100%",
        height: "10%",
        marginVertical: 20,
        backgroundColor: "transparent",
        top: DIMENSION_HEIGHT / 6,
    },
    btnContainerThree: {
        height: "10%",
        marginVertical: 20,
    },
    rightContainer: {
        width: "50%",
        height: "10%",
        position: "relative",
        alignContent: "flex-start"
    },
    sameLine: {
        flexDirection: "column"
    },
    btnContainerFour: {
        flexDirection: "row",
    },
    btnLeft: {

    },
    btnRight: {

    },
    bgImage: {
        flex: 1,
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    bgWhite: {
        flex: 1,
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: WHITE
    },
    logo: {
        position: 'absolute',
        top: DIMENSION_HEIGHT / 6.5,
        marginHorizontal: "12%",
        marginBottom: 10,
    },
    icon: {
        fontSize: 20,
        color: WHITE
    },
    button: {
        borderRadius: 50,
        height: 50,
        width: '90%',
        left: '5%',
        padding: 15,
        paddingLeft: 25,
        marginBottom: 15,
    },
    buttonText: {
        textTransform: "uppercase",
        height: 50,
        fontSize: 17,
        color: WHITE,
    },
    greyText: {
        color: GRAY_ONE
    },
    btFb: {
        backgroundColor: FB_BLUE
    },
    btGg: {
        backgroundColor: GG_RED
    },
    btEm: {
        borderStyle: 'solid',
        borderColor: BLACK,
        backgroundColor: WHITE,
    },
    navContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 30,
        backgroundColor: "transparent",
        width: '100%',
        height: '15%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    navContainerTwo: {
        zIndex: 1,
        position: 'absolute',
        top: 30,
        backgroundColor: WHITE,
        width: '100%',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    navText: {
        fontSize: 18,
        color: WHITE,
        position: 'absolute',
        top: 0,
        // fontFamily:'courier-bold'
    },
    navTextTopOne: {
        top: 10,
    },
    navTextLeftOne: {
        left: DIMENSION_WIDTH / 2.5,
    },
    navTextLeftOneM: {
        left: DIMENSION_WIDTH / 2.7,
    },
    navTextLeftTwoM: {
        left: DIMENSION_WIDTH / 3.1,
    },
    navTextLeftTwo: {
        left: DIMENSION_WIDTH / 3.2,
    },
    navTextLeftThree: {
        left: DIMENSION_WIDTH / 3.5,
    },
    blackFont: {
        color: BLACK,
    },
    btnArrow: {
        top: 12,
        left: "3%",
        width: 60,
        height: 40,
        borderRadius: 40,
    },
    btnCheck: {
        top: -45,
        left: "80%",
        width: 70,
        height: 60,
        borderRadius: 40,
        padding: 0,
    },
    btnCheckIcon: {
        position: "relative",
        width: 90,
        height: 85,
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 124,
        height: 124,
        backgroundColor: WHITE_TRANSPARENT,
        borderRadius: 64,
        padding: 10
    },
    imageContainerTwo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        padding: 10,
    },
    extraMarginTop: {
        top: STATUSBAR_HEIGHT * 1.5
    },
    lessMarginTop: {
        top: - STATUSBAR_HEIGHT * 1.5
    },
    btnBody: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        borderRadius: 10,
        padding: 10
    },
    btnBodyAct: {
        backgroundColor: WHITE,
    },
    textBody: {
        fontWeight: "bold",
        marginTop: 15,
        fontSize: 30,
        color: "white"
    },
    textBodyAct: {
        color: GRAY_TWO
    },
    btnPermitir: {
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        backgroundColor: WHITE,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    btnPermitirTwo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        borderRadius: 100 / 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textPermitir: {
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    redFont: {
        color: "red"
    },
    whiteFont: {
        color: WHITE
    },
    textContainerH2: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        paddingLeft: 20,
        marginVertical: 20,
        height: 50,
        top: -10,
    },
    textColumn: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textH2: {
        fontSize: 22,
        fontWeight: "bold",
        justifyContent: "center",
        color: BLACK
    },
    textH1: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        color: BLACK
    },
    textBlue: {
        color: BLUE_SKY
    },
    textContainer: {
        marginHorizontal: "10%",
        height: 250,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    scrollViewTwo: {
        marginHorizontal: 8,
    },
    textScroll: {
        width: "100%",
        fontSize: 14,
        justifyContent: "center",
        color: BLACK
    },
    btnArrowLeft: {
        left: 0,
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    btnArrowRight: {
        top: -40,
        left: "86%",
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    btnHechoRight: {
        width: 60,
        left: "80%",

    },
    btnArrowRightTwo: {
        top: -40,
        left: "80%",
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    btnFont: {
        top: 0,
        left: 10,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 50,
        zIndex: 0,
        width: "100%",
    },
    scrollContainerTwo: {
        // flex: 1,
        marginTop: 50,
        zIndex: 0,
        width: "100%",
        borderRadius: 5,
        backgroundColor: WHITE,
        height: DIMENSION_HEIGHT / 1.22,
    },
    marginTopMore: {
        marginTop: 75,
    },
    userDummy: {
        top: -5,
    },
    inputContent: {
        backgroundColor: WHITE,
        marginBottom: 5,
    },
    inputContentLogin: {
        width: "95%",
        backgroundColor: "transparent",
        marginBottom: 10,
        left: "2.5%",
        borderRadius: 5,
    },
    first: {
        marginVertical: 20,
    },
    labelInput: {
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 17,
        color: BLACK,
    },
    NoMgBt: {
        marginBottom: 0,
    },
    NoMgTp: {
        marginTop: 0,
    },
    last: {
        marginBottom: 10,
    },
    Input: {
        fontWeight: "100",
        fontSize: 17,
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: GRAY_CERO,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5
    },
    hechoText: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 17,
        fontWeight: "bold",
        color: PRIMARY_COLOR
    },
    hechoTextPromt: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 17,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        marginTop: 20,
        marginRight: "45%",
    },
    title: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginLeft: "20%",
        fontSize: 24,
        fontWeight: "bold",
        color: BLACK
    },
    slideContent: {
        width: "100%",
        height: 40
    },
    markerStyle: {
        left: 15,
        borderColor: WHITE,
        borderWidth: 3,
        ...Platform.select({
            ios: {
                height: 30,
                width: 30,
                shadowColor: BLACK,
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 1,
                shadowOpacity: 0.1
            },
            android: {
                height: 30,
                width: 30,
                borderRadius: 50,
                shadowColor: BLACK,
                backgroundColor: SECONDARY_COLOR
            }
        })
    },
    pressedMarkerStyle: {
        ...Platform.select({
            android: {
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: SECONDARY_COLOR
            }
        })
    },
    pressedMarkerStyleAndorid: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: SECONDARY_COLOR
    },
    selectedStyle: {
        backgroundColor: PRIMARY_COLOR,
        height: 10,
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        top: -5
    },
    trackStyle: {
        backgroundColor: '#EFEFEF',
        height: 10,
        borderRadius: 5,
        top: -5
    },
    slideLabelContent: {
        marginVertical: 0,
        padding: 0,
        height: 40,
    },
    noMarginVertical: {
        marginVertical: 0,
    },
    btnCrear: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 40,
        backgroundColor: STAR_ACTIONS,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    btnCrearTwo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: 40,
        backgroundColor: STAR_ACTIONS,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    btnBuscar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: 40,
        backgroundColor: "transparent",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    fullWidth: {
        width: "100%",
    },
    textCrear: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        color: WHITE
    },
    tiniText: {
        position: "relative",
        fontFamily: 'ralewey-regular',
        fontSize: 15,
        left: "85%",
        top: -20,
        color: GRAY_ONE
    },
    floatRigth: {

    },
    labelRigthInput: {
        position: "relative",
        fontFamily: 'ralewey-regular',
        fontSize: 15,
        left: "85%",
        top: -20,
        color: GRAY_ONE

    },
    label: {
        position: "relative",
        zIndex: 1,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
        width: 40,
        height: 25,
        borderRadius: 10,
        top: 20,
        left: 10
    },
    labelText: {
        fontSize: 17,
        color: WHITE,
        left: 5,
        top: -1.5
    },
    select: {
        top: -15,
        zIndex: 0,
        fontWeight: "100",
        fontSize: 20,
        height: 50,
        backgroundColor: GRAY_CERO,
        borderWidth: 0,
        borderRadius: 5,
        paddingLeft: 60,
        paddingRight: 10,
        paddingVertical: 10,
        marginVertical: 0,
    },
    selectText: {
        color: BLACK_TWO,
        top: -10,
        borderColor: 'transparent',
        borderWidth: 0,
        height: 45,

    },
    btnRegister: {
        height: 40,
        width: '90%',
        left: '5%',
        padding: 10,
        paddingLeft: 20,
        marginBottom: 15,
        backgroundColor: "transparent",
    },
    newBtnTextS: {
        textAlign: "center",
        fontSize: 18,
        left: '-5%',

    },
    moreMarginTopBtn: {
        marginTop: 10,
        width: '60%',
        marginLeft: "15%"
    },
    lessMarginTopBtn: {
        position: "relative",
        top: -10,
        fontSize: 16,
    },
    candidateProfileContainer: {},
    //tinder app styles
    // COMPONENT - CARD ITEM
    containerCardItem: {
        backgroundColor: WHITE,
        borderRadius: 20,
        alignItems: "center",
        height: DIMENSION_HEIGHT / 1.5,
        width: DIMENSION_WIDTH / 1.3,
        marginLeft: "10%",
        marginTop: "10%",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: BLACK,
        shadowOffset: { height: 0, width: 0 },
        elevation: 5,
    },
    descriptionCardItem: {
        fontSize: 15,
        color: GRAY_ONE,
        textAlign: "center"
    },
    videoCardItem: {
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        width: DIMENSION_WIDTH / 1.3,
        height: DIMENSION_HEIGHT / 2,
        flexDirection: "column",
        alignItems: "center",
        // paddingVertical: 10,
        backgroundColor: DARK_GRAY,
        paddingHorizontal: 20,
    },
    videoCardItemMod: {
        left: 0,
        width: DIMENSION_WIDTH + 1,
        height: DIMENSION_HEIGHT,
        paddingHorizontal: 0,
        borderTopEndRadius: 0,
        borderTopLeftRadius: 0,

    },
    videoStyle: {
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        width: DIMENSION_WIDTH / 1.3,
        height: DIMENSION_HEIGHT / 2,
        margin: 0
    },
    lessTopCardItem: {
        top: -29,
    },
    actionsCardItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",
        marginVertical: 0,
        height: 60,
    },
    infoCardItem: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: WHITE,
        paddingHorizontal: 20,
        height: 50,
    },
    nameStyle: {
        paddingBottom: 5,
        color: BLACK,
        fontSize: 20
    },
    btnPlayAbsolute: {
        zIndex: 15,
        borderRadius: 0,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        width: DIMENSION_WIDTH / 1.3,
        height: DIMENSION_HEIGHT / 2,
        backgroundColor: BLACK_TRANSPARENT,
    },
    buttonTin: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "transparent",
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.05,
        shadowRadius: 20,
        shadowColor: DARK_GRAY,
        shadowOffset: { height: 0, width: 0 },
        elevation: 2,
    },
    miniButton: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: "transparent",
        borderColor: DARK_GRAY,
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowColor: DARK_GRAY,
        shadowOffset: { height: 0, width: 0 },
        // elevation: 1,
    },
    star: {
        fontFamily: ICON_FONT,
        color: STAR_ACTIONS
    },
    like: {
        fontSize: 25,
        fontFamily: ICON_FONT,
        color: LIKE_ACTIONS
    },
    dislike: {
        fontSize: 25,
        fontFamily: ICON_FONT,
        color: DISLIKE_ACTIONS
    },
    flash: {
        fontFamily: ICON_FONT,
        color: FLASH_ACTIONS
    },
    firstCard: {
        width: 300, height: 150,
        position: 'absolute',
        zIndex: 3,
        bottom: 0,
        opacity: 1,
        transform: [{ scale: 1.0 }],
    },
    secodCard: {
        width: 300, height: 150,
        position: 'absolute',
        zIndex: 2,
        bottom: 20,
        opacity: 0.6,
        transform: [{ scale: 0.90 }],
    },
    lastCard: {
        width: 300, height: 150,
        position: 'absolute',
        zIndex: 1,
        bottom: 40,
        opacity: 0.3,
        transform: [{ scale: 0.80 }],
    },

    // Recordatorio para Fernando Revisar para borrar
    // COMPONENT - FILTERS
    filters: {
        backgroundColor: WHITE_TRANSPARENT,
        padding: 10,
        borderRadius: 40 / 2,
        width: 40,
        height: 40,
        // shadowOpacity: 0.05,
        // shadowRadius: 10,
        // shadowColor: BLACK,
        // shadowOffset: { height: 0, width: 0 },
        // elevation: 5
    },
    filtersImg: {
        top: 2,
    },
    filtersText: {
        fontFamily: ICON_FONT,
        color: DARK_GRAY,
        fontSize: 13
    },

    // CONTAINER - GENERAL
    content: {},
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT
    },
    top: {
        paddingTop: STATUSBAR_HEIGHT,
        paddingBottom: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    topText: {
        textAlign: "left",
        fontSize: 25,
        // fontFamily:"relawey-bold"
        fontWeight: "900",
    },
    titleTin: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
    iconTin: {
        fontFamily: ICON_FONT,
        fontSize: 20,
        color: DARK_GRAY,
        paddingRight: 10
    },
    itemStyle: {
        padding: 10,
    },
    itemStyleTwo: {
        padding: 10,
    },
    successTextContainer:{

    },
    successText:{

    },
});