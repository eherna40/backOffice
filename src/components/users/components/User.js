import React from 'react'
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function User(props) {
    const { id } = props.user
    const { active, email, enrollment, name, pass } = props.user.data()
    return (
        <Grid id={ id }  xs={12} item className="user">
            <div className="user-datas  d-flex align-items-center justify-content-space-between">
                <div className="user-name user-item d-inline-flex ">
                    <div className="user-name-letter">
                        {name.trim().charAt(0)}
                    </div>
                    <div>
                        <div>{name.trim()}</div>
                        <small>{ email.trim() }</small>
                    </div>
                </div>
                <div className="user-city user-item">
                    barcelona
                </div>
                <div className="user-options d-inline-flex">
                    <div className="user-active user-item">
                        <Switch
                            checked={props.switch === null ? active : props.switch}
                            onChange={() => props.handleSwitch (active, id)}
                            value="checkedA"
                            color="primary"

                        />
                    </div>
                    <div className="user-menu user-item">
                        <IconButton
                            aria-label="More"
                            aria-owns={props.open ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={( el ) => props.handleClick( el , id)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <Grid xs={12} spacing={40} item container className="user-modification">
                <Grid xs={4} item className="user-profile card-user">
                    <div className="card">
                        <div className="card-body">
                            <div className="user-content">
                                <div className="user-avatar">
                                    <div className="user-avatar-content"></div>
                                </div>
                                <h5 className="title">Mike Andrew</h5>
                                <p className="description">
                                    Ceo/Co-Founder
                    </p>
                            </div>

                        </div>
                    </div>
                </Grid>
                <Grid xs={8} item className="form-id">
                    <form className=" card d-flex" id={id} onSubmit={(el) => props.handleSubmit(el)}>
                        <Grid xs={8} item container spacing={16} className="card-body">
                            <Grid item xs={12} className="card-header">
                                <h5 className="title">Editar Perfil</h5>
                            </Grid>
                            <Grid item xs={6} className="input-content d-flex flex-direction-column">
                                <label>Nombre</label>
                                <input name ="name" type="text" className="form-control" placeholder="Nombre" />
                            </Grid>
                            <Grid item xs={6} className="input-content d-flex flex-direction-column">
                                <label>Email</label>
                                <input name="email" type="text" className="form-control" placeholder="Email" />
                            </Grid>
                            <Grid item xs={8} className="input-content d-flex flex-direction-column">
                                <label>Dirección</label>
                                <input name="address" type="text" className="form-control" placeholder="Direccion" />
                            </Grid>
                            <Grid item xs={4} className="input-content d-flex flex-direction-column">
                                <label>CP</label>
                                <input name="cp" type="text" className="form-control" placeholder="Direccion" />
                            </Grid>
                            <Grid item xs={6} className="input-content d-flex flex-direction-column" >
                                <label>Población</label>
                                <input name="city" type="text" className="form-control" placeholder="Población" />
                            </Grid>
                            <Grid item xs={3} className="input-content d-flex flex-direction-column">
                                <label>Provincia</label>
                                <input name="state" type="text" className="form-control" placeholder="Provincia" />
                            </Grid>
                        </Grid>
                        <Grid item xs={4} container>
                            <Grid xs={12} item container className="buttons-container d-flex flex-direction-column justify-content-space-between aling-items-center">
                                <div className="d-flex flex-direction-column justify-content-center align-items-flex-end">
                                    <Button variant="outlined" type="submit" className="user-button-normal" size="small" >GUARDAR</Button>
                                    <Button onClick={ () => props.handleDeleteUser(id)} variant="outlined" className="user-button-normal" size="small" >ELIMINAR</Button>


                                </div>
                                <div className="d-flex flex-direction-column justify-content-center align-items-flex-end">

                                    <Button variant="contained" size="small" className="user-button-cancell" color="secondary">CANCELAR</Button>
                                </div>
                            </Grid>
                        </Grid>

                    </form>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default User
