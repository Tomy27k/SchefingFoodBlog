import React from 'react'
import bgforum from "../../../../assets/images/worldfoof.png";
import RecipeItems from './RecipeItems';

const RecipeItemsPage = () => {
  return (
    <>
        <section className='recipe-items'>
        <div className='container '>
            <RecipeItems
              title='halil'
              content='nasil'
              img_src={bgforum}
              tag={['halil','toma','caitlin','tencate']}
              button="Details"
            />
            <RecipeItems
              title='halil'
              content='loremdask lopfdsfgijpdsk gl;dfsjkglo;kds;kd;gkl;dks;fk;dskf;k sd;kf;dsfkldsg ldsfosdjuf iojfkowufgsdofgksfoasflsdfjsdflo;sdfgjo jlgjuewf;wefgldswglwej gpkwfgkw;ékflsjdgkadasda jsuflojsdd lgjldsjgldjslgjlsdjgl jdlsjg'
              img_src={bgforum}
              tag={['halil','toma','caitlin','tencate']}
              button='nasil'
            />

    

        </div>
      </section>
    </>
  )
}

export default RecipeItemsPage