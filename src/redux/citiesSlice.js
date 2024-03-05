import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice ({
    name: "cities",
    initialState: {
        value: [
            {
                id: 0,
                isVisited : true,
                title : "Tokyo",
                imgUrl : "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                children : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              },
          
              {
                id : 1,
                isVisited : false,
                title : "New York",
                imgUrl : "https://plus.unsplash.com/premium_photo-1681803606255-cb66b02f2b56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                children : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              },
          
              {
                id : 2,
                isVisited : true,
                title : "Rome",
                imgUrl : "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                children : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              },
              
              {
                id : 3,
                isVisited : false,
                title : "Paris",
                imgUrl : "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                children : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              },
        ],
    },
    reducers: {
        add: (state,action) => {
           state.value.push(action.payload);
        },
    },
});

export const {add} = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;

