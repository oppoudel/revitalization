import React from 'react';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';
import Box from './Box';

const Neighborhood = ({ attributes }) => (
  <div className="neighborhood">
    <hr />
    <h2 className="title">{attributes.Name}</h2>
    <div className="wrapper">
      <Box
        title="Total Number of Properties Sold"
        seventeen={attributes.TotalNumSold17}
        sixteen={attributes.TotalNumSold16}
        difference={attributes.TotalNumSold17 - attributes.TotalNumSold16}
        icon={
          attributes.TotalNumSold17 - attributes.TotalNumSold16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Home Ownership Rate"
        seventeen={attributes.pct_own_occ17.toFixed(2) + '%'}
        sixteen={attributes.pct_own_occ16.toFixed(2) + '%'}
        difference={
          (attributes.pct_own_occ17 - attributes.pct_own_occ16).toFixed(2) + '%'
        }
        icon={
          attributes.pct_own_occ17 - attributes.pct_own_occ16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Tax Deliquent Properties"
        seventeen={attributes.TaxSales_17}
        sixteen={attributes.TaxSales_16}
        difference={attributes.TaxSales_17 - attributes.TaxSales_16}
        icon={
          attributes.TaxSales_17 - attributes.TaxSales_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Average Value of Property Sold"
        seventeen={'$' + attributes.AvgSold17.toFixed(2)}
        sixteen={'$' + attributes.AvgSold16.toFixed(2)}
        difference={
          '$' + (attributes.AvgSold17 - attributes.AvgSold16).toFixed(2)
        }
        icon={
          attributes.AvgSold17 - attributes.AvgSold16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Vacant Lots"
        seventeen={attributes.Vacant_Lots17}
        sixteen={attributes.Vacant_Lots16}
        difference={attributes.Vacant_Lots17 - attributes.Vacant_Lots16}
        icon={
          attributes.Vacant_Lots17 - attributes.Vacant_Lots16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Average Cost per Square Feet"
        seventeen={'$' + attributes.Cost_SqFt17.toFixed(2)}
        sixteen={'$' + attributes.Cost_SqFt16.toFixed(2)}
        difference={
          '$' + (attributes.Cost_SqFt17 - attributes.Cost_SqFt16).toFixed(2)
        }
        icon={
          attributes.Cost_SqFt17 - attributes.Cost_SqFt16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Percentage of Renovation Permits"
        seventeen={attributes.UO_VBN_17 + '%'}
        sixteen={attributes.UO_VBN_16 + '%'}
        difference={attributes.UO_VBN_17 - attributes.UO_VBN_16 + '%'}
        icon={
          attributes.UO_VBN_17 - attributes.UO_VBN_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Single Family Residential Permits"
        seventeen={attributes.COM_SF_17}
        sixteen={attributes.COM_SF_16}
        difference={attributes.COM_SF_17 - attributes.COM_SF_16}
        icon={
          attributes.COM_SF_17 - attributes.COM_SF_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Multi Family Residential Permits"
        seventeen={attributes.COM_MF_17}
        sixteen={attributes.COM_MF_16}
        difference={attributes.COM_MF_17 - attributes.COM_MF_16}
        icon={
          attributes.COM_MF_17 - attributes.COM_MF_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Commercial Building Permits"
        seventeen={attributes.COM_COM_17}
        sixteen={attributes.COM_COM_16}
        difference={attributes.COM_COM_17 - attributes.COM_COM_16}
        icon={
          attributes.COM_COM_17 - attributes.COM_COM_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Industrial Building Permits"
        seventeen={attributes.COM_IND_17}
        sixteen={attributes.COM_IND_16}
        difference={attributes.COM_IND_17 - attributes.COM_IND_16}
        icon={
          attributes.COM_IND_17 - attributes.COM_IND_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Other Building Permits"
        seventeen={attributes.COM_OT_17}
        sixteen={attributes.COM_OT_16}
        difference={attributes.COM_OT_17 - attributes.COM_OT_16}
        icon={
          attributes.COM_OT_17 - attributes.COM_OT_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Dirty Alley Service Requests"
        seventeen={attributes.SR_DirtyAlley_17}
        sixteen={attributes.SR_DirtyAlley_16}
        difference={attributes.SR_DirtyAlley_17 - attributes.SR_DirtyAlley_16}
        icon={
          attributes.SR_DirtyAlley_17 - attributes.SR_DirtyAlley_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Cleaning Service Requests"
        seventeen={attributes.SR_Cleaning_17}
        sixteen={attributes.SR_Cleaning_16}
        difference={attributes.SR_Cleaning_17 - attributes.SR_Cleaning_16}
        icon={
          attributes.SR_Cleaning_17 - attributes.SR_Cleaning_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Abandoned Car Service Requests"
        seventeen={attributes.SR_AbandonCar_17}
        sixteen={attributes.SR_AbandonCar_16}
        difference={attributes.SR_AbandonCar_17 - attributes.SR_AbandonCar_16}
        icon={
          attributes.SR_AbandonCar_17 - attributes.SR_AbandonCar_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Footway Service Requests"
        seventeen={attributes.SR_Footway_17}
        sixteen={attributes.SR_Footway_16}
        difference={attributes.SR_Footway_17 - attributes.SR_Footway_16}
        icon={
          attributes.SR_Footway_17 - attributes.SR_Footway_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Cleaning Service Requests"
        seventeen={attributes.SR_Cleaning_17}
        sixteen={attributes.SR_Cleaning_16}
        difference={attributes.SR_Cleaning_17 - attributes.SR_Cleaning_16}
        icon={
          attributes.SR_Cleaning_17 - attributes.SR_Cleaning_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Graffiti Service Requests"
        seventeen={attributes.SR_Graffiti_17}
        sixteen={attributes.SR_Graffiti_16}
        difference={attributes.SR_Graffiti_17 - attributes.SR_Graffiti_16}
        icon={
          attributes.SR_Graffiti_17 - attributes.SR_Graffiti_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Highgrass Service Requests"
        seventeen={attributes.SR_Highgrass_17}
        sixteen={attributes.SR_Highgrass_16}
        difference={attributes.SR_Highgrass_17 - attributes.SR_Highgrass_16}
        icon={
          attributes.SR_Highgrass_17 - attributes.SR_Highgrass_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Dumping Service Requests"
        seventeen={attributes.SR_Dumping_17}
        sixteen={attributes.SR_Dumping_16}
        difference={attributes.SR_Dumping_17 - attributes.SR_Dumping_16}
        icon={
          attributes.SR_Dumping_17 - attributes.SR_Dumping_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Missed Trash Service Requests"
        seventeen={attributes.SR_MissedTrash_17}
        sixteen={attributes.SR_Missedtrash_16}
        difference={attributes.SR_MissedTrash_17 - attributes.SR_Missedtrash_16}
        icon={
          attributes.SR_MissedTrash_17 - attributes.SR_Missedtrash_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Rodent Service Requests"
        seventeen={attributes.SR_Rodent_17}
        sixteen={attributes.SR_Rodent_16}
        difference={attributes.SR_Rodent_17 - attributes.SR_Rodent_16}
        icon={
          attributes.SR_Rodent_17 - attributes.SR_Rodent_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Number of Street Light Service Requests"
        seventeen={attributes.SR_Streetlight_17}
        sixteen={attributes.SR_Streetlight_16}
        difference={attributes.SR_Streetlight_17 - attributes.SR_Streetlight_16}
        icon={
          attributes.SR_Streetlight_17 - attributes.SR_Streetlight_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
    </div>
  </div>
);

export default Neighborhood;
