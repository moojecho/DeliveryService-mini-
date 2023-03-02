export type homeInfoProps = {
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
};

export type lastOrderType = [
  {
    properties: {
      name: {
        description: string;
        example: string;
      };
      img: {
        description: string;
        example: string;
      };
    };
  }
]

export type newStoreType = [
  {
    properties: {
      name: {
        description: string;
        example: string;
      };
      img: {
        description: string;
        example: string;
      };
    };
  }
];
