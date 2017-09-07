const express = require('express');
const bodyParser = require('body-parser');
const quotes = require('./data');
// Create the express router object for Photos
const quoteRouter = express.Router();

quoteRouter.use(bodyParser.urlencoded({
  extended: true,
}));
quoteRouter.use(bodyParser.json());

// A GET to the root of a resource returns a list of that resource
quoteRouter.get('/EditQuote', (req, res) => {
  const response = {
    quote: {
      id: '1',
      name: 'Table Quote',
      netAmount: 15000,
      customerAmount: 123,
      paymentTerms: 123,
      priceBookId: '123',
      linesGrouped: true,
      expirationDate: 'Date',
      currency: '₹',
      isPrimary: true,
      type: 'Quote/Renewal/Amendement',
      lines: [
        {
          id: '111',
          code: 'Dom154',
          name: 'Porche',
          type: 'Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          isSegmented: false,
          segmentData: null,
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          parentId: '111',
          parentName: 'Porche',
          id: '12456',
          isBundled: true,
          code: 'Dom154AC',
          name: 'Porche AC',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: false,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 345,
                listPrice: 3453453,
                uplift: 345345,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 44535,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 345345,
                netTotal: 345333,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 7657,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4512,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: 's',
          parentId: '111',
          parentName: 'Porche',
          isBundled: true,
          code: 'Dom154Stter',
          name: 'Porche Steering',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '123ass',

          code: 'Car154',
          name: 'Ferrari',
          type: 'Product',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: false,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          isSegmented: false,
          segmentData: null,
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '222',
          code: 'Car3422',
          name: 'Lamborghini',
          type: 'Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 7854,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45821,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '3453453',
          parentId: '222',
          parentName: 'Lamborghini',
          isBundled: true,
          code: 'LAmbo154AC',
          name: 'Lambo AC',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 345,
                listPrice: 3453453,
                uplift: 345345,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 23243,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 345345,
                netTotal: 345333,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 333,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 1025,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '333',
          code: 'Car348',
          name: 'Pagani',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 67567,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 54645,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 9889,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 8970,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45456,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '444',
          code: 'Bike123',
          name: 'Ducatti',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123123,
                listPrice: 12541,
                uplift: 12541,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 12541,
                netTotal: 12541,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4765,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '555',
          code: 'Bike489',
          name: 'Harley Davidson',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 2345,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 78967,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '666',
          code: 'Bike 121',
          name: 'BMW',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 6578,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 65786,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 65786,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '777',
          code: 'P121',
          name: 'Classic',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 56456,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '888',
          code: 'Mob',
          name: 'Mobile',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45645,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '999',
          code: 'M123',
          name: 'Mobile Smart',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Quaterly',
            columns: [
              {
                name: 'Quater 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 5464,
              },
              {
                name: 'Quater 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
              {
                name: 'Quater 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '112',
          code: 'T132',
          name: 'Android',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                isDefault: true,
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4356456,
              },
              {
                name: 'Custom 1',
                isDefault: false,
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '113',
          code: 'Light254',
          name: 'LED',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '115',
          code: 'Cam325',
          name: 'Camera',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Quaterly',
            columns: [
              {
                name: 'Quater 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Quater 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Quater 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
      ],
      groups: [
        {
          id: '123',
          name: 'Group1',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
        {
          id: '456',
          name: 'Group2',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
        {
          id: '789',
          name: 'Group3',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
      ],
    },
    config: {},
  };
  res.header('Access-Control-Allow-Origin', '*');
  res.header('content-type', 'application/json');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return res.json(response);
});
quoteRouter.post('/AddProductsNew', (req, res) => {
  const response = {
    quote: {
      id: '1',
      name: 'Table Quote',
      netAmount: 15000,
      customerAmount: 123,
      paymentTerms: 123,
      priceBookId: '123',
      linesGrouped: true,
      expirationDate: 'Date',
      currency: '₹',
      isPrimary: true,
      type: 'Quote/Renewal/Amendement',
      lines: [
        {
          id: '123',
          code: 'P121',
          name: 'Car',
          isSegmented: false,
          type: 'Product',
          isBundled: true,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          segmentData: null,
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '1234',
          isSegmented: false,
          code: 'car12',
          name: 'car2',
          type: 'Product',
          isBundled: true,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          segmentData: null,
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '1235',
          code: 'car3',
          isSegmented: false,
          name: 'car',
          type: 'Product/Bundle',
          isBundled: true,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          segmentData: null,
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '111',
          code: 'Dom154',
          name: 'Porche',
          type: 'Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          isSegmented: false,
          segmentData: null,
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          parentId: '111',
          parentName: 'Porche',
          id: '12456',
          isBundled: true,
          code: 'Dom154AC',
          name: 'Porche AC',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: false,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 345,
                listPrice: 3453453,
                uplift: 345345,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 44535,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 345345,
                netTotal: 345333,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 7657,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4512,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: 's',
          parentId: '111',
          parentName: 'Porche',
          isBundled: true,
          code: 'Dom154Stter',
          name: 'Porche Steering',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '123ass',

          code: 'Car154',
          name: 'Ferrari',
          type: 'Product',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: false,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          isSegmented: false,
          segmentData: null,
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '222',
          code: 'Car3422',
          name: 'Lamborghini',
          type: 'Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 7854,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45821,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '3453453',
          parentId: '222',
          parentName: 'Lamborghini',
          isBundled: true,
          code: 'LAmbo154AC',
          name: 'Lambo AC',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 345,
                listPrice: 3453453,
                uplift: 345345,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 23243,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 345345,
                netTotal: 345333,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 333,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 1025,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '333',
          code: 'Car348',
          name: 'Pagani',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 67567,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 54645,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 9889,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 8970,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45456,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '444',
          code: 'Bike123',
          name: 'Ducatti',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123123,
                listPrice: 12541,
                uplift: 12541,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 12541,
                netTotal: 12541,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4765,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '555',
          code: 'Bike489',
          name: 'Harley Davidson',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 2345,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 78967,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '666',
          code: 'Bike 121',
          name: 'BMW',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 6578,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 65786,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 65786,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '777',
          code: 'P121',
          name: 'Classic',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 56456,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '888',
          code: 'Mob',
          name: 'Mobile',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45645,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '999',
          code: 'M123',
          name: 'Mobile Smart',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Quaterly',
            columns: [
              {
                name: 'Quater 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 5464,
              },
              {
                name: 'Quater 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
              {
                name: 'Quater 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '112',
          code: 'T132',
          name: 'Android',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                isDefault: true,
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4356456,
              },
              {
                name: 'Custom 1',
                isDefault: false,
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '113',
          code: 'Light254',
          name: 'LED',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '115',
          code: 'Cam325',
          name: 'Camera',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Quaterly',
            columns: [
              {
                name: 'Quater 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Quater 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Quater 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
      ],
      groups: [
        {
          id: '123',
          name: 'Group1',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
        {
          id: '456',
          name: 'Group2',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
        {
          id: '789',
          name: 'Group3',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
      ],
    },
    config: {},
  };
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  return res.json(response);
});
// /v1/quote/validateCustomSegment
quoteRouter.post('/validateCustomSegment', (req, res) => {
  const requestBody = req.body;
  if (requestBody.dimension != null && requestBody.dimension !== undefined) {
    if (requestBody.dimension.id != null && requestBody.dimension.quoteId != null && requestBody.dimension.productId != null && requestBody.dimension.name != null && requestBody.dimension.segment != null && requestBody.dimension.segment.length > 0 &&
      requestBody.dimension.id !== '' && requestBody.dimension.quoteId !== '' && requestBody.dimension.productId !== '' && requestBody.dimension.name !== '' && requestBody.dimension.segment !== '' && requestBody.dimension.segment.length > 0) {
      res.json(req.body);
    } else {
      res.json({
        errorMessage: 'validation error',
      });
    }
  } else {
    res.json({
      errorMessage: 'validation error',
    });
  }
});

// /v1/quote/SavePriceBook
quoteRouter.post('/SavePriceBook', (req, res) => {
  if (req.body.quoteId !== '' && req.body.priceBookId !== '' && req.body.config !== undefined &&
    req.body.quoteId !== undefined && req.body.priceBookId !== undefined &&
    req.body.quoteId !== null && req.body.priceBookId !== null) {
    res.json(req.body);
  } else {
    res.json({
      errorMessage: 'validation error',
    });
  }
});

quoteRouter.post('/SaveCustomSegments', (req, res) => {
  const response = {
    quote: {
      id: '1',
      name: 'Table Quote',
      netAmount: 15000,
      customerAmount: 123,
      paymentTerms: 123,
      priceBookId: '123',
      linesGrouped: true,
      expirationDate: 'Date',
      currency: '₹',
      isPrimary: true,
      type: 'Quote/Renewal/Amendement',
      lines: [
        {
          id: '111',
          code: 'Dom154',
          name: 'Porche',
          type: 'Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          isSegmented: false,
          segmentData: null,
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          parentId: '111',
          parentName: 'Porche',
          id: '12456',
          isBundled: true,
          code: 'Dom154AC',
          name: 'Porche AC',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: false,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 345,
                listPrice: 3453453,
                uplift: 345345,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 44535,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 345345,
                netTotal: 345333,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 7657,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4512,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: 's',
          parentId: '111',
          parentName: 'Porche',
          isBundled: true,
          code: 'Dom154Stter',
          name: 'Porche Steering',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '123ass',

          code: 'Car154',
          name: 'Ferrari',
          type: 'Product',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: false,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: false,
          isSegmented: false,
          segmentData: null,
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '222',
          code: 'Car3422',
          name: 'Lamborghini',
          type: 'Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 7854,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45821,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '3453453',
          parentId: '222',
          parentName: 'Lamborghini',
          isBundled: true,
          code: 'LAmbo154AC',
          name: 'Lambo AC',
          type: 'Product',
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 345,
                listPrice: 3453453,
                uplift: 345345,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 23243,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 345345,
                netTotal: 345333,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 333,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 1025,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '333',
          code: 'Car348',
          name: 'Pagani',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '456',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 67567,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 54645,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 9889,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 8970,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45456,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '444',
          code: 'Bike123',
          name: 'Ducatti',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123123,
                listPrice: 12541,
                uplift: 12541,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 12541,
                netTotal: 12541,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4765,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '555',
          code: 'Bike489',
          name: 'Harley Davidson',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 2345,
              },
              {
                name: 'Custom 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 78967,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '666',
          code: 'Bike 121',
          name: 'BMW',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 6578,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 65786,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 65786,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '777',
          code: 'P121',
          name: 'Classic',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '789',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 56456,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '888',
          code: 'Mob',
          name: 'Mobile',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Yearly',
            columns: [
              {
                name: 'Year 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 45645,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '999',
          code: 'M123',
          name: 'Mobile Smart',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: true,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Quaterly',
            columns: [
              {
                name: 'Quater 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 5464,
              },
              {
                name: 'Quater 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
              {
                name: 'Quater 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '112',
          code: 'T132',
          name: 'Android',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: false,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Custom',
            columns: [
              {
                name: 'Custom',
                isDefault: true,
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 4356456,
              },
              {
                name: 'Custom 1',
                isDefault: false,
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 456456,
              },
              {
                name: 'Custom 2',
                isDefault: false,
                quantity: 1234,
                listPrice: 1234,
                uplift: 1234,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                additionalDiscount: {
                  value: 1234,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '1234',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '1244',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 1234,
                netTotal: 4564564,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '113',
          code: 'Light254',
          name: 'LED',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: true,
          segmentData: {
            type: 'Monthly',
            columns: [
              {
                name: 'Month 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Month 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Month 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: true,
          canShowDiscountScheduler: false,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: false,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: true,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
        {
          id: '115',
          code: 'Cam325',
          name: 'Camera',
          type: 'Product/Bundle',
          isBundled: false,
          isDisableReconfiguration: false,
          groupId: '123',
          markup: 123,
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          discountSchedule: {
            id: 123,
            name: 'Diwali',
            discountUnit: 'Percent/Amount',
            type: 'Range/Slab',
            tiers: [
              {
                id: 123,
                name: 'tier1',
                lowerBound: 1,
                upperBound: 10,
                discountpercent: 10,
                discountamount: 123,
              },
            ],
          },
          canClone: true,
          canSegment: true,
          isSegmented: false,
          segmentData: {
            type: 'Quaterly',
            columns: [
              {
                name: 'Quater 1',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Quater 2',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
              {
                name: 'Quater 3',
                quantity: 123,
                listPrice: 123,
                uplift: 123,
                startDate: 'Date',
                endDate: 'Date',
                additionalDiscount: {
                  value: 123,
                  isEditable: true,
                  isVisible: true,
                  dataType: 'select',
                  selectValues: [
                    {
                      id: '123',
                      value: '%',
                      isSelected: false,
                    },
                    {
                      id: '124',
                      value: 'INR',
                      isSelected: true,
                    },
                  ],
                },
                netunitPrice: 123,
                netTotal: 123,
              },
            ],
          },
          canReconfigure: false,
          canShowDiscountScheduler: true,
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
            ],
          },
          isTaxable: true,
          additionalDiscount: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'select',
            selectValues: [
              {
                id: '123',
                value: '%',
                isSelected: true,
              },
              {
                id: '124',
                value: 'INR',
                isSelected: false,
              },
            ],
          },
          netUnitPrice: 123,
          totalPrice: 123,
          netTotal: 123,
          pricingMethod: {
            values: [
              {
                id: 123,
                value: 'List',
                isSelected: true,
              },
              {
                id: 123,
                value: ':Cost',
                isSelected: false,
              },
            ],
          },
        },
      ],
      groups: [
        {
          id: '123',
          name: 'Group1',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
        {
          id: '456',
          name: 'Group2',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
        {
          id: '789',
          name: 'Group3',
          isOptional: true,
          description: 'longtext',
          additionaldiscount: 123,
          subscriptionTerm: 123,
          netTotal: 52000,
        },
      ],
    },
    config: {},
  };
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  return res.json(response);
});

// /v1/quote/save/{QuoteID}
quoteRouter.post('/save/:QuoteID', (req, res) => {
  // req.params.QuoteID;
  quotes.quotes.push(req.body.quote);
  res.json(req.body);
});

quoteRouter.post('/calculate/:QuoteID', (req, res) => {
  // req.params.QuoteID;
  quotes.quotes.push(req.body.quote);
  res.json(req.body);
});


// A POST to the root of a resource should create a new object
quoteRouter.post('/', (req, res) => {
  res.json({
    PostCalled: true,
  });
});
// We specify a param in our path for the GET of a specific object
quoteRouter.get('/:id', (req, res) => {
  res.json({
    GetWithIDCalled: true,
  });
});
// Similar to the GET on an object, to update it we can PATCH
quoteRouter.patch('/:id', (req, res) => {
  res.json({
    PatchWithIDCalled: true,
  });
});
// Delete a specific object
quoteRouter.delete('/:id', (req, res) => {
  res.json({
    DeleteWithIDCalled: true,
  });
});

// A POST to the root of a resource should create a new object
quoteRouter.post('/SaveConfigurations', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  const productBundleData = {
    productBundle: {
      id: 1,
      quoteId: 123,
      quoteName: 'Q-00163',
      name: 'Meal',
      products: [
        {
          id: 12311,
          code: 'P121',
          name: 'ABCD',
          featureId: 123,
          categoryId: 123,
           // categoryId: null,
          isDependent: true,
          isSelected: true,
          isRequired: false,
          isDeleted: false,
          optionSelectionMethod: 123,
          optionLayout: 'wizard/section/tab',
          quantity: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          listPrice: {
            value: 123,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
        },
        {
          id: 234,
          code: 'P122sds',
          name: 'EFGHfsadfad',
          featureId: 456,
          categoryId: 456,
            // categoryId: null,
          isDependent: true,
          isSelected: true,
          isRequired: true,
          isDeleted: false,
          optionSelectionMethod: 456,
          optionLayout: 'wizard/section/tab',
          quantity: {
            value: 565,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          listPrice: {
            value: 654,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 554,
                value: ':List',
                isSelected: true,
              },
            ],
          },
        },
        {
          id: 145,
          code: 'P122',
          name: 'EFGH',
          featureId: 789,
          categoryId: 456,
            // featureId: null,
           // categoryId: null,
          isDependent: true,
          isSelected: false,
          isRequired: false,
          isDeleted: false,
          optionSelectionMethod: 456,
          optionLayout: 'wizard/section/tab',
          quantity: {
            value: 565,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          listPrice: {
            value: 654,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 554,
                value: ':List',
                isSelected: true,
              },
            ],
          },
        },
        {
          id: 980,
          code: 'P122dfgsad',
          name: 'EFGHgsdfg',
          featureId: null,
            // featureId: 789,
           // categoryId: 456,
          categoryId: null,
          isDependent: true,
          isSelected: true,
          isRequired: false,
          isDeleted: false,
          optionSelectionMethod: 456,
          optionLayout: 'wizard/section/tab',
          quantity: {
            value: 565,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 123,
                value: ':List',
                isSelected: true,
              },
            ],
          },
          listPrice: {
            value: 654,
            isEditable: true,
            isVisible: true,
            dataType: 'text/select/textarea/inputSelect',
            selectValues: [
              {
                id: 554,
                value: ':List',
                isSelected: true,
              },
            ],
          },
        },
      ],
      categories: [
        {
          id: 123,
          name: 'Hardware',
        },
        {
          id: 456,
          name: 'Software',
        },
      ],
      features: [
        {
          id: 123,
          categoryId: 123,
          //  categoryId: null,
          name: 'Drinks',
          DynamicAddEnabled: true,
          minOption: 1,
          maxOption: 2,
        },
        {
          id: 456,
          categoryId: 456,
           // categoryId: null,
          name: 'Mc Meal',
          DynamicAddEnabled: true,
        },
        {
          id: 789,
          categoryId: 456,
            // categoryId: null,
          name: 'Test Feature',
          DynamicAddEnabled: false,
        },
      ],
    },
    config: {},
  };
  return res.json(productBundleData);
});

const routerConfig = {
  quoteRouter,
};

module.exports = routerConfig;
