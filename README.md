# my-home-app
ReactNative client of MyHome project.

The porpuse of this project is to provide functions to create a shopping list and registered all products bought in shopping and provide reports about spend money and more bought products.

The backend is in the my-home-server in https://github.com/vitorsm/my-home-server/

The main entity in this project is Purchase, each Purchase has a list of bought products.
The products can be registered before and be linked to a brand and product type. If the product has product type and brand, is possible to generate report by brand and product type.


## Navigation

To navigate between screens the React Navigation is used. The main component is the Navigator that is linked to RootNavigator. The RootNavigator is a Stack.Navigator that provide the features screens navigation. Each feature has a specific navigator. The RootNavigator has the following screens:

* SideMenu
* Splash
* Login
* Home
* [All features]

Each feature has its navigator. For example, the Brand feature has the following screens in its navigator:

* CreateBrand
* Filter
* ListBrand
* SelectBrand

The component that is exposed is the BrandNavigator.

## Directories structure

We have two type of visual items: screens and components. Components are visual items that are used in one or more screens. The screens are in the fetures directory. For each feature we have a directory.

### Components

The component directory has components items. The components can be used in one or more screens. For each component we have a directory. Inside the directory has the index file linked to the main item, style file that contains the styled components and the jsx files with the items. In MessageDialog for example:

* style.js: contains the styled components
* MessageContainer.jsx: the message container item
* MessageDialog.jsx: the main item, has MessageContainer
* index.js: link the MessageDialog to expose it

### Features

The features directory contains the app screens. Each feature has a directory that contain a index that link to main screen and a 'views' directory that contain the screens. If necessary the feature can has a navigator.

### Redux

Redux directory has items to make http requests and to manage global state of any resources. The ```actions``` directory is where the http requests are created, for organization reasons, for each context there is a action file. The results from http request are persisted in global states that are managed by the reducers. In the reducers directory there is one directory for each context, and each file take care of one state.

### Configs

The general configs are centralized in configs directory. All colors, fonts and strings must be registered in the configs to ensure that changes will be easy to do.

## Coding

To ensure the code quality is recommended to use eslint. To init eslint configuration perform this command:
```
npx eslint --init
```

Select the following options:
1. To check syntax, find problems, and enforce code style
1. JavaScript modules (import/export)
1. React
1. No TypeScript
1. To run in node
1. Use a popular guide
1. Airbnb style guide
1. Javascript


### Adding a new feature

1. Normally a feature needs to consume a service in the backend. For this reason can be necessary to create a action file for this new feature in the directory ```src/redux/actions```. In the ```src/redux/actions/index.js``` there are the commons functions like get, put, post and delete. Create a type for each action. This type will be used in the redux. In this example, when the post receive a response it will call dispatch passing the CREATE_BRAND type. And the responsible reducer will take a action:
    ```
    export const CREATE_BRAND = 'create_brand';

    export const createBrand = (brand) => async (dispatch) => {
        httpPost('brand/', brand, CREATE_BRAND, dispatch);
    };

    ```

1. If was necessary consume a service, this step is required. To the application know that the response was received is necessary create a reducer and add it to ```combineReducers```. Create a new directory for this new feature in ```src/redux/reducers```. For each function craeted in the action file craete a new reducer file like this:

    ```
    import { CREATE_BRAND } from '../../actions/brandActions';

    export default (state = null, action) => {
    switch (action.type) {
        case CREATE_BRAND:
        return action.payload || false;
        default:
        return state;
    }
    };

    ```
    Then add the new reducer to the combineReducers in ```src/redux/reducers/index.js```.

1. Create a directory in ```src/features``` for the new feature. Then craete 'views' directory that will contains all screens and index.js file. If the feature has various screens, is necessary create a navigator for it. The main screen should be linked in the index file.

1. If necessary, add a menu for this feature in ```src/features/side-menu/views/MenuItems.jsx```.

1. Add the feature in the RootNavigator in ```src/navigator/RootNavigator.jsx```. The ```screens``` variable contains all navigable screens.
