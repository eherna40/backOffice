import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

function Local() {
  return (
      <Link to='/locals/profile/21'>
<Grid lg={2} item className="local">
                    <div className="local-content">
                        <div className="local-name">Bar gulias</div>
                        <div className="local-ubicacion local-item">
                            <div className="local-label color-secondary">Ubicación</div>
                            <div className="local-field color-primary">Barcelona</div>
                        </div>
                        <div className="local-promos-count d-flex align-items-center justify-content-center">
                            <span>4</span>
                        </div>
                        <div className="local-extra-data">
                        <div className="local-ubicacion local-item">
                            <div className="local-label color-secondary">Direccion</div>
                            <div className="local-field color-primary">Gran via de las cortes catalanas 276, 6 3</div>
                        </div>
                        <div className="local-ubicacion local-item">
                            <div className="local-label color-secondary">Poblacion</div>
                            <div className="local-field color-primary">Barcelona</div>
                        </div>
                        <div className="local-ubicacion local-item">
                            <div className="local-label color-secondary">Codigo postal</div>
                            <div className="local-field color-primary">08004</div>
                        </div>
                        <div className="local-map">
                        mapa
                        </div>
                        </div>
                    </div>
                </Grid>
                </Link>
  )
}

export default Local
