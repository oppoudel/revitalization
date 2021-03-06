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
        title="Median Sales Price"
        seventeen={'$' + attributes.Median_Price_17}
        sixteen={'$' + attributes.Median_Price_16}
        difference={
          '$' + (attributes.Median_Price_17 - attributes.Median_Price_16)
        }
        icon={
          attributes.Median_Price_17 - attributes.Median_Price_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Sales Price Variation"
        seventeen={'$' + attributes.SalePrice_Diff_17}
        sixteen={'$' + attributes.SalePrice_Diff_16}
        difference={
          '$' + (attributes.SalePrice_Diff_17 - attributes.SalePrice_Diff_16)
        }
        icon={
          attributes.SalePrice_Diff_17 - attributes.SalePrice_Diff_16 >= 0 ? (
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
        title="Number of Vacant Buildings"
        seventeen={attributes.buildings_17}
        sixteen={attributes.buildings_16}
        difference={attributes.buildings_17 - attributes.buildings_16}
        icon={
          attributes.buildings_17 - attributes.buildings_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <div className="box">
        <div className="content">
          <p>
            <strong>Number of Foreclosures</strong>
          </p>
        </div>
        <table className="table is-bordered">
          <tbody>
            <tr>
              <td>2016</td>
              <td>2015</td>
              <td>Difference</td>
            </tr>
            <tr>
              <td>{attributes.Foreclosures_2016}</td>
              <td>{attributes.Foreclosures_2015}</td>
              <td>
                {attributes.Foreclosures_2016 - attributes.Foreclosures_2015}
                {attributes.Foreclosures_2016 - attributes.Foreclosures_2015 >=
                0 ? (
                  <FaArrowCircleUp color="limegreen" size="20" />
                ) : (
                  <FaArrowCircleDown color="red" size="20" />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Box
        title="Number of Residential Permits over 10K"
        seventeen={attributes.RPOver10k_17}
        sixteen={attributes.RPOver10k_16}
        difference={attributes.RPOver10k_17 - attributes.RPOver10k_16}
        icon={
          attributes.RPOver10k_17 - attributes.RPOver10k_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Pct. of Owner Occupied Properties"
        seventeen={attributes.pct_own_occ17.toFixed(0) + '%'}
        sixteen={attributes.pct_own_occ16.toFixed(0) + '%'}
        difference={
          (attributes.pct_own_occ17 - attributes.pct_own_occ16).toFixed(0) + '%'
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
        title="Number of Housing units per square mile"
        seventeen={attributes.Housing17SqMi.toFixed(0)}
        sixteen={attributes.Housing16SqMi.toFixed(0)}
        difference={(
          attributes.Housing17SqMi - attributes.Housing16SqMi
        ).toFixed(0)}
        icon={
          attributes.Housing17SqMi - attributes.Housing16SqMi >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Commercial Industrial Land Area in SqMiles"
        seventeen={attributes.Commercial_Industrial_Area_17.toFixed(2)}
        sixteen={attributes.Commercial_Industrial_Area_16.toFixed(2)}
        difference={(
          attributes.Commercial_Industrial_Area_17 -
          attributes.Commercial_Industrial_Area_16
        ).toFixed(2)}
        icon={
          attributes.Commercial_Industrial_Area_17 -
            attributes.Commercial_Industrial_Area_16 >=
          0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <hr />
      <hr />
      <hr />
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
        title="Number of Owner Occupied Properties"
        seventeen={attributes.Owner_Occ17}
        sixteen={attributes.Owner_Occ16}
        difference={attributes.Owner_Occ17 - attributes.Owner_Occ16}
        icon={
          attributes.Owner_Occ17 - attributes.Owner_Occ16 >= 0 ? (
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
        seventeen={'$' + attributes.AvgSold17.toFixed(0)}
        sixteen={'$' + attributes.AvgSold16.toFixed(0)}
        difference={
          '$' + (attributes.AvgSold17 - attributes.AvgSold16).toFixed(0)
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
        title="Average Cost per Square Feet"
        seventeen={'$' + attributes.Cost_SqFt17.toFixed(0)}
        sixteen={'$' + attributes.Cost_SqFt16.toFixed(0)}
        difference={
          '$' + (attributes.Cost_SqFt17 - attributes.Cost_SqFt16).toFixed(0)
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
      <Box
        title="Total Number of CFS Crimes"
        seventeen={attributes.Crime_17}
        sixteen={attributes.Crime_16}
        difference={attributes.Crime_17 - attributes.Crime_16}
        icon={
          attributes.Crime_17 - attributes.Crime_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Aggravated Assault"
        seventeen={attributes.Agg_Assault_17}
        sixteen={attributes.Agg_Assault_16}
        difference={attributes.Agg_Assault_17 - attributes.Agg_Assault_16}
        icon={
          attributes.Agg_Assault_17 - attributes.Agg_Assault_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Burglary"
        seventeen={attributes.Burglary_17}
        sixteen={attributes.Burglary_16}
        difference={attributes.Burglary_17 - attributes.Burglary_16}
        icon={
          attributes.Burglary_17 - attributes.Burglary_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Homicide"
        seventeen={attributes.Homicide_17}
        sixteen={attributes.Homicide_16}
        difference={attributes.Homicide_17 - attributes.Homicide_16}
        icon={
          attributes.Homicide_17 - attributes.Homicide_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Carjacking"
        seventeen={attributes.Carjacking_17}
        sixteen={attributes.Carjacking_16}
        difference={attributes.Carjacking_17 - attributes.Carjacking_16}
        icon={
          attributes.Carjacking_17 - attributes.Carjacking_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Commercial Robbery"
        seventeen={attributes.Commercial_Robbery_17}
        sixteen={attributes.Commercial_Robbery_16}
        difference={
          attributes.Commercial_Robbery_17 - attributes.Commercial_Robbery_16
        }
        icon={
          attributes.Commercial_Robbery_17 - attributes.Commercial_Robbery_16 >=
          0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Residential Robbery"
        seventeen={attributes.Residential_Robbery_17}
        sixteen={attributes.Residential_Robbery_16}
        difference={
          attributes.Residential_Robbery_17 - attributes.Residential_Robbery_16
        }
        icon={
          attributes.Residential_Robbery_17 -
            attributes.Residential_Robbery_16 >=
          0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Street Robbery"
        seventeen={attributes.Street_Robbery_17}
        sixteen={attributes.Street_Robbery_16}
        difference={attributes.Street_Robbery_17 - attributes.Street_Robbery_16}
        icon={
          attributes.Street_Robbery_17 - attributes.Street_Robbery_16 >= 0 ? (
            <FaArrowCircleUp color="limegreen" size="20" />
          ) : (
            <FaArrowCircleDown color="red" size="20" />
          )
        }
      />
      <Box
        title="Crime: Shooting"
        seventeen={attributes.Shooting_17}
        sixteen={attributes.Shooting_16}
        difference={attributes.Shooting_17 - attributes.Shooting_16}
        icon={
          attributes.Shooting_17 - attributes.Shooting_16 >= 0 ? (
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
