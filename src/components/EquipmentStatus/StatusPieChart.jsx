import React from 'react';
import { ResponsivePie } from '@nivo/pie';


export const StatusPieChart = ({ equipment, selectedType }) => {
    const filteredEquipment = selectedType === 'all' 
    ? equipment 
    : equipment.filter(eq => eq.type === selectedType);

    const data = [
        {
          id: 'active',
          label: 'Active',
          value: filteredEquipment.filter(eq => eq.status === 'active').length,
          color: '#22c55e'
        },
        {
          id: 'inactive',
          label: 'Inactive',
          value: filteredEquipment.filter(eq => eq.status === 'inactive').length,
          color: '#ef4444'
        }
      ];
      const totalCount = filteredEquipment.length;
      const subtitle = selectedType === 'all' 
        ? `Total Equipment: ${totalCount}` 
        : `${selectedType} Equipment: ${totalCount}`;


    return (
        <div>
        <p className="text-sm text-gray-500 text-center mb-2">{subtitle}</p>
        <div className="h-64 w-full">
          <ResponsivePie
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ datum: 'data.color' }}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.2]]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 2]]
            }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 16,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle'
              }
            ]}
          />
        </div>
      </div>
    );

};
