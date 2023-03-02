export type homeOrMenuProps = {
  home: {
    properties: {
      grade: {
        properties: {
          img: {
            description: string;
            example: string;
          };
          name: {
            description: string;
            example: string;
          };
        };
      };
      last_store: {
        properties: {
          img: {
            description: string;
            example: string;
          };
          name: {
            description: string;
            example: string;
          };
        };
      };
      new_store_list: {
        items: {
          properties: {
            name: {
              description: string;
              example: string;
            };
          };
        };
      };
      point: {
        description: string;
        example: number;
        format: string;
      };
    };
  };

  menu: {
    properties: {
      menu_group_info: {
        properties: {
          description: {
            description: string;
            example: string;
          };
          menu_info: {
            items: {
              properties: {
                description: {
                  description: string;
                  example: string;
                };
                img: {
                  description: string;
                  example: string;
                };
                name: {
                  description: string;
                  example: string;
                };
                price: {
                  description: string;
                  items: {
                    properties: {
                      name: { description: string; example: string };
                      price: { description: string; example: number };
                    };
                  };
                };
                sold_out: {
                  description: string;
                  example: boolean;
                };
              };
            };
          };
          name: { description: string; example: string };
          sort: { description: string; example: number };
        };
      };
      store_info: {
        properties: {
          delivery_fee: {
            description: string;
            example: number;
          };
          min_price: {
            description: string;
            example: number;
          };
          name: {
            description: string;
            example: string;
          };
          point: {
            description: string;
            example: number;
          };
        };
      };
    };
  };

  menuInfoButtonToggle: {
    toggle: boolean;
  };
};
