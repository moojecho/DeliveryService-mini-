import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import * as stateTypes from "../type"; 

const initialState: stateTypes.homeOrMenuProps = {
  home: {
    properties: {
      grade: {
        properties: {
          img: {
            description: "",
            example: "",
          },
          name: {
            description: "",
            example: "",
          },
        },
      },
      last_store: {
        properties: {
          img: {
            description: "",
            example: "",
          },
          name: {
            description: "",
            example: "",
          },
        },
      },
      new_store_list: {
        items: {
          properties: {
            name: {
              description: "",
              example: "",
            },
          },
        },
      },
      point: {
        description: "",
        example: 0,
        format: "",
      },
    },
  },

  menu: {
    properties: {
      menu_group_info: {
        properties: {
          description: {
            description: '',
            example: ''
          },
          menu_info: {
            items: {
              properties: {
                description: {
                  description: '',
                  example: ''
                },
                img: {
                  description: '',
                  example: ''
                },
                name: {
                  description: '',
                  example: ''
                },
                price: {
                  description: '',
                  items: {
                    properties: {
                      name: { description: '', example: '' },
                      price: { description: '', example: 0 }
                    }
                  }
                },
                sold_out:{
                  description:'',
                  example:false
                }
              }
            }
          },
          name: { description: '', example: '' },
          sort: { description: '', example: 0 }
        }
      },
      store_info: {
        properties: {
          delivery_fee: {
            description: '',
            example: 0
          },
          min_price: {
            description: '',
            example: 0
          },
          name: {
            description: '',
            example: '',
          },
          point: {
            description: '',
            example: 0
          }
        }
      }
    }
  },
  menuInfoButtonToggle:{
    toggle:false
  }
};

export const __homeOrMenuInfo: any = createAsyncThunk(
  "HOMEINFO",
  async (payload, thunkAPI) => {
    const { data } = await axios.get(`http://ct.nas.network/syrup.json`);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const CodeTestSlice = createSlice({
  name: "codeTest",
  initialState,
  reducers: {
    changeToggle: (state, action: PayloadAction<boolean>) => {
    state.menuInfoButtonToggle = {...state.menuInfoButtonToggle,toggle:!action.payload};
  },},
  extraReducers: (builder) => {
    builder.addCase(__homeOrMenuInfo.fulfilled, (state, action) => {
      state.home = action.payload.definitions.Home;
      state.menu = action.payload.definitions.Menu;
    })
  },
});
export const {changeToggle} = CodeTestSlice.actions;
export default CodeTestSlice.reducer;
