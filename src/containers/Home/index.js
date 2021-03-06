import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SneakerServices from '../../services/sneaker';
import Grid from '../../components/Grid';
import Row from '../../components/Grid/Row';
import ColItem from '../../components/Grid/ColItem';
import SneakerForm from '../../components/SneakerForm';
import Splash from '../../components/Splash';
import Label from '../../components/Label';
import { titleCase } from '../../utils';
import WhiteDiamond from '../../assets/white_diamond.png';
import './Home.scss';

class Home extends Component {
  state = {
    showSplash: true,
    showForm: false,
    row: '',
    col: ''
  };

  componentWillReceiveProps (nextProps) {
    if (this.props.isAdding && !nextProps.isAdding) {
      this.clearForm();
    }
  }

  componentWillUnmount () {
    this.props.actions.clearSneakers();
  }

  onAdd (row, col) {
    this.setState({ showForm: true, row, col });
  }

  onAddSubmit (data) {
    const { row, col } = this.state;
    const pos = { row, col };

    this.props.actions.addSneaker(data, pos);
  }

  onRemove (row, col) {
    const { deleteSneaker } = this.props.actions;
    const data = { row, col };

    deleteSneaker(data);
  }

  submitSneaker () {
  // Just a wrapper to actually hit the form submit
    this.sneakerSubmit.submit();
  }

  clearForm () {
    this.setState({ showForm: false, row: '', col: '' });
  }

  showSplash () {
    this.setState({ showSplash: false });
  }

  renderHeader () {
    return (
      <div className='header'>
        <h1>
          <img src={WhiteDiamond} alt='logo' />
          ON DECK
        </h1>
      </div>
    );
  }

  renderItem (item, rowId) {
    const size = Math.floor(12 / (Object.keys(item).length));
    const offset = 1;

    return Object.keys(item).map((key) => {
      const props = {
        col: key,
        row: rowId,
        item: item[key],
        onAdd: ::this.onAdd,
        onRemove: ::this.onRemove,
        size,
        offset,
        key
      };
      const order = ['brand', 'style', 'size', 'upc'];
      const colItem = item[key];

      return (
        <ColItem {...props}>
          {order.map((x) => {
            const renderItem = (
              <Label label={titleCase(x)} value={colItem[x]} key={x} />
            );

            return colItem[x] ? renderItem : '';
          })}
        </ColItem>
      );
    });
  }

  renderGrid () {
    const { inventory, actions } = this.props;

    return (
      <div>
        <Grid>
          {Object.keys(inventory).map((row) => {
            return (
              <Row key={row}>
                {this.renderItem(inventory[row], row)}
              </Row>
            );
          })}
        </Grid>
        <br />
        <button
          className='btn btn-default pull-right clearBtn'
          onClick={::actions.clearSneakers}
        >
          CLEAR ALL
        </button>
      </div>
    );
  }

  renderApp () {
    const { inventory } = this.props;
    const { showForm, row, col } = this.state;
    const check = row !== '' && col !== '';
    const sneakerForm = (
      <SneakerForm
        onSubmit={::this.onAddSubmit}
        ref={node => this.sneakerSubmit = node}
        onCancel={::this.clearForm}
        initialValues={check ? inventory[row][col] : {}}
      />
    );

    return (
      <div>
        {this.renderHeader()}
        {showForm ? sneakerForm : this.renderGrid()}
      </div>
    );
  }

  render () {
    const { showSplash } = this.state;

    return (
      <div className='container'>
        {showSplash ? <Splash start={::this.showSplash} /> : this.renderApp()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {
    inventory: state.sneaker.inventory,
    isAdding: state.sneaker.isAdding
  };

  return newState;
};

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      deleteSneaker: SneakerServices.deleteSneaker,
      addSneaker: SneakerServices.addSneaker,
      clearSneakers: SneakerServices.clearSneakers
    }, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
