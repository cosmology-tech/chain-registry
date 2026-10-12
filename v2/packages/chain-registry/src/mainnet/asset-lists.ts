import { AssetList } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _namada from './namada';
import * as _penumbra from './penumbra';
import * as _rootstock from './rootstock';
import * as _solana from './solana';
import * as _ton from './ton';
import * as _tron from './tron';
import * as _aaronetwork from './aaronetwork';
import * as _agoric from './agoric';
import * as _aioz from './aioz';
import * as _akash from './akash';
import * as _allora from './allora';
import * as _althea from './althea';
import * as _amitis from './amitis';
import * as _andromeda from './andromeda';
import * as _archway from './archway';
import * as _arkeo from './arkeo';
import * as _arkh from './arkh';
import * as _assetmantle from './assetmantle';
import * as _atomone from './atomone';
import * as _aura from './aura';
import * as _axelar from './axelar';
import * as _axiome from './axiome';
import * as _axone from './axone';
import * as _babylon from './babylon';
import * as _bandchain from './bandchain';
import * as _beezee from './beezee';
import * as _bitbadges from './bitbadges';
import * as _bitcanna from './bitcanna';
import * as _bitsong from './bitsong';
import * as _bitway from './bitway';
import * as _blg24 from './blg24';
import * as _blockx from './blockx';
import * as _bluechip from './bluechip';
import * as _bluzelle from './bluzelle';
import * as _bouachain from './bouachain';
import * as _buycex from './buycex';
import * as _canto from './canto';
import * as _carbon from './carbon';
import * as _celestia from './celestia';
import * as _chain4energy from './chain4energy';
import * as _cheqd from './cheqd';
import * as _chihuahua from './chihuahua';
import * as _chimba from './chimba';
import * as _cifer from './cifer';
import * as _cnhostables from './cnhostables';
import * as _commercionetwork from './commercionetwork';
import * as _composable from './composable';
import * as _conscious from './conscious';
import * as _coreum from './coreum';
import * as _cosmoshub from './cosmoshub';
import * as _coss from './coss';
import * as _crescent from './crescent';
import * as _cronos from './cronos';
import * as _cryptoorgchain from './cryptoorgchain';
import * as _cysic from './cysic';
import * as _decentr from './decentr';
import * as _desmos from './desmos';
import * as _divine from './divine';
import * as _doravota from './doravota';
import * as _dungeon from './dungeon';
import * as _dydx from './dydx';
import * as _dymension from './dymension';
import * as _echelon from './echelon';
import * as _empowerchain from './empowerchain';
import * as _epix from './epix';
import * as _ethos from './ethos';
import * as _fandomchain from './fandomchain';
import * as _fetchhub from './fetchhub';
import * as _finschia from './finschia';
import * as _firmachain from './firmachain';
import * as _furya from './furya';
import * as _galaxy from './galaxy';
import * as _gateway from './gateway';
import * as _genesisl1 from './genesisl1';
import * as _ggezchain from './ggezchain';
import * as _gitopia from './gitopia';
import * as _gnodi from './gnodi';
import * as _gonka from './gonka';
import * as _govgen from './govgen';
import * as _gravitybridge from './gravitybridge';
import * as _haqq from './haqq';
import * as _hazinachain from './hazinachain';
import * as _heli from './heli';
import * as _highbury from './highbury';
import * as _hipercapital from './hipercapital';
import * as _hippoprotocol from './hippoprotocol';
import * as _humans from './humans';
import * as _hyve from './hyve';
import * as _idep from './idep';
import * as _impacthub from './impacthub';
import * as _imversed from './imversed';
import * as _initia from './initia';
import * as _injective from './injective';
import * as _intento from './intento';
import * as _irisnet from './irisnet';
import * as _jackal from './jackal';
import * as _joltify from './joltify';
import * as _juno from './juno';
import * as _kava from './kava';
import * as _kiichain from './kiichain';
import * as _kimanetwork from './kimanetwork';
import * as _konstellation from './konstellation';
import * as _kopi from './kopi';
import * as _kudora from './kudora';
import * as _kujira from './kujira';
import * as _kyve from './kyve';
import * as _lava from './lava';
import * as _lefeef from './lefeef';
import * as _likecoin from './likecoin';
import * as _logos from './logos';
import * as _lombardledger from './lombardledger';
import * as _loop from './loop';
import * as _lorenzo from './lorenzo';
import * as _loyal from './loyal';
import * as _ltrstchain from './ltrstchain';
import * as _lumen from './lumen';
import * as _lumera from './lumera';
import * as _lumiwaveprotocol from './lumiwaveprotocol';
import * as _lumnetwork from './lumnetwork';
import * as _mande from './mande';
import * as _manifest from './manifest';
import * as _mantrachain from './mantrachain';
import * as _mayachain from './mayachain';
import * as _medasdigital from './medasdigital';
import * as _meme from './meme';
import * as _migaloo from './migaloo';
import * as _mirage from './mirage';
import * as _mises from './mises';
import * as _mtgbp from './mtgbp';
import * as _mucoin from './mucoin';
import * as _mun from './mun';
import * as _mythos from './mythos';
import * as _neura from './neura';
import * as _neutaro from './neutaro';
import * as _neutron from './neutron';
import * as _nibiru from './nibiru';
import * as _nim from './nim';
import * as _noble from './noble';
import * as _nolus from './nolus';
import * as _nomic from './nomic';
import * as _nvnmchain from './nvnmchain';
import * as _nyx from './nyx';
import * as _octa from './octa';
import * as _okexchain from './okexchain';
import * as _opct from './opct';
import * as _optio from './optio';
import * as _oraichain from './oraichain';
import * as _osmosis from './osmosis';
import * as _paloma from './paloma';
import * as _panacea from './panacea';
import * as _passage from './passage';
import * as _paxi from './paxi';
import * as _persistence from './persistence';
import * as _planq from './planq';
import * as _pocket from './pocket';
import * as _point from './point';
import * as _provenance from './provenance';
import * as _pundix from './pundix';
import * as _pylons from './pylons';
import * as _qfs from './qfs';
import * as _qie from './qie';
import * as _qorechain from './qorechain';
import * as _qubetics from './qubetics';
import * as _quicksilver from './quicksilver';
import * as _qwoyn from './qwoyn';
import * as _realio from './realio';
import * as _regen from './regen';
import * as _ritbit from './ritbit';
import * as _rizon from './rizon';
import * as _safrochain from './safrochain';
import * as _saga from './saga';
import * as _scorum from './scorum';
import * as _secretnetwork from './secretnetwork';
import * as _seda from './seda';
import * as _sei from './sei';
import * as _self from './self';
import * as _sentinel from './sentinel';
import * as _sge from './sge';
import * as _shareledger from './shareledger';
import * as _shentu from './shentu';
import * as _shido from './shido';
import * as _sidechain from './sidechain';
import * as _sifchain from './sifchain';
import * as _six from './six';
import * as _sommelier from './sommelier';
import * as _source from './source';
import * as _sovr from './sovr';
import * as _stoc from './stoc';
import * as _stratos from './stratos';
import * as _stride from './stride';
import * as _sunrise from './sunrise';
import * as _symphony from './symphony';
import * as _synternet from './synternet';
import * as _tac from './tac';
import * as _tail from './tail';
import * as _taketitan from './taketitan';
import * as _tenet from './tenet';
import * as _teritori from './teritori';
import * as _terpnetwork from './terpnetwork';
import * as _terra from './terra';
import * as _terra2 from './terra2';
import * as _thejaynetwork from './thejaynetwork';
import * as _thorchain from './thorchain';
import * as _titan from './titan';
import * as _turkchain from './turkchain';
import * as _unicorn from './unicorn';
import * as _unification from './unification';
import * as _union from './union';
import * as _ununifi from './ununifi';
import * as _uptick from './uptick';
import * as _vector from './vector';
import * as _wardenprotocol from './wardenprotocol';
import * as _wolochain from './wolochain';
import * as _xarchain from './xarchain';
import * as _xion from './xion';
import * as _xpla from './xpla';
import * as _xrplevm from './xrplevm';
import * as _xyra from './xyra';
import * as _zenrock from './zenrock';
import * as _zerone from './zerone';
import * as _zetachain from './zetachain';
import * as _zigchain from './zigchain';

const assetList: AssetList[] = [
  _ethereum.assetList,
  _namada.assetList,
  _penumbra.assetList,
  _rootstock.assetList,
  _solana.assetList,
  _ton.assetList,
  _tron.assetList,
  _aaronetwork.assetList,
  _agoric.assetList,
  _aioz.assetList,
  _akash.assetList,
  _allora.assetList,
  _althea.assetList,
  _amitis.assetList,
  _andromeda.assetList,
  _archway.assetList,
  _arkeo.assetList,
  _arkh.assetList,
  _assetmantle.assetList,
  _atomone.assetList,
  _aura.assetList,
  _axelar.assetList,
  _axiome.assetList,
  _axone.assetList,
  _babylon.assetList,
  _bandchain.assetList,
  _beezee.assetList,
  _bitbadges.assetList,
  _bitcanna.assetList,
  _bitsong.assetList,
  _bitway.assetList,
  _blg24.assetList,
  _blockx.assetList,
  _bluechip.assetList,
  _bluzelle.assetList,
  _bouachain.assetList,
  _buycex.assetList,
  _canto.assetList,
  _carbon.assetList,
  _celestia.assetList,
  _chain4energy.assetList,
  _cheqd.assetList,
  _chihuahua.assetList,
  _chimba.assetList,
  _cifer.assetList,
  _cnhostables.assetList,
  _commercionetwork.assetList,
  _composable.assetList,
  _conscious.assetList,
  _coreum.assetList,
  _cosmoshub.assetList,
  _coss.assetList,
  _crescent.assetList,
  _cronos.assetList,
  _cryptoorgchain.assetList,
  _cysic.assetList,
  _decentr.assetList,
  _desmos.assetList,
  _divine.assetList,
  _doravota.assetList,
  _dungeon.assetList,
  _dydx.assetList,
  _dymension.assetList,
  _echelon.assetList,
  _empowerchain.assetList,
  _epix.assetList,
  _ethos.assetList,
  _fandomchain.assetList,
  _fetchhub.assetList,
  _finschia.assetList,
  _firmachain.assetList,
  _furya.assetList,
  _galaxy.assetList,
  _gateway.assetList,
  _genesisl1.assetList,
  _ggezchain.assetList,
  _gitopia.assetList,
  _gnodi.assetList,
  _gonka.assetList,
  _govgen.assetList,
  _gravitybridge.assetList,
  _haqq.assetList,
  _hazinachain.assetList,
  _heli.assetList,
  _highbury.assetList,
  _hipercapital.assetList,
  _hippoprotocol.assetList,
  _humans.assetList,
  _hyve.assetList,
  _idep.assetList,
  _impacthub.assetList,
  _imversed.assetList,
  _initia.assetList,
  _injective.assetList,
  _intento.assetList,
  _irisnet.assetList,
  _jackal.assetList,
  _joltify.assetList,
  _juno.assetList,
  _kava.assetList,
  _kiichain.assetList,
  _kimanetwork.assetList,
  _konstellation.assetList,
  _kopi.assetList,
  _kudora.assetList,
  _kujira.assetList,
  _kyve.assetList,
  _lava.assetList,
  _lefeef.assetList,
  _likecoin.assetList,
  _logos.assetList,
  _lombardledger.assetList,
  _loop.assetList,
  _lorenzo.assetList,
  _loyal.assetList,
  _ltrstchain.assetList,
  _lumen.assetList,
  _lumera.assetList,
  _lumiwaveprotocol.assetList,
  _lumnetwork.assetList,
  _mande.assetList,
  _manifest.assetList,
  _mantrachain.assetList,
  _mayachain.assetList,
  _medasdigital.assetList,
  _meme.assetList,
  _migaloo.assetList,
  _mirage.assetList,
  _mises.assetList,
  _mtgbp.assetList,
  _mucoin.assetList,
  _mun.assetList,
  _mythos.assetList,
  _neura.assetList,
  _neutaro.assetList,
  _neutron.assetList,
  _nibiru.assetList,
  _nim.assetList,
  _noble.assetList,
  _nolus.assetList,
  _nomic.assetList,
  _nvnmchain.assetList,
  _nyx.assetList,
  _octa.assetList,
  _okexchain.assetList,
  _opct.assetList,
  _optio.assetList,
  _oraichain.assetList,
  _osmosis.assetList,
  _paloma.assetList,
  _panacea.assetList,
  _passage.assetList,
  _paxi.assetList,
  _persistence.assetList,
  _planq.assetList,
  _pocket.assetList,
  _point.assetList,
  _provenance.assetList,
  _pundix.assetList,
  _pylons.assetList,
  _qfs.assetList,
  _qie.assetList,
  _qorechain.assetList,
  _qubetics.assetList,
  _quicksilver.assetList,
  _qwoyn.assetList,
  _realio.assetList,
  _regen.assetList,
  _ritbit.assetList,
  _rizon.assetList,
  _safrochain.assetList,
  _saga.assetList,
  _scorum.assetList,
  _secretnetwork.assetList,
  _seda.assetList,
  _sei.assetList,
  _self.assetList,
  _sentinel.assetList,
  _sge.assetList,
  _shareledger.assetList,
  _shentu.assetList,
  _shido.assetList,
  _sidechain.assetList,
  _sifchain.assetList,
  _six.assetList,
  _sommelier.assetList,
  _source.assetList,
  _sovr.assetList,
  _stoc.assetList,
  _stratos.assetList,
  _stride.assetList,
  _sunrise.assetList,
  _symphony.assetList,
  _synternet.assetList,
  _tac.assetList,
  _tail.assetList,
  _taketitan.assetList,
  _tenet.assetList,
  _teritori.assetList,
  _terpnetwork.assetList,
  _terra.assetList,
  _terra2.assetList,
  _thejaynetwork.assetList,
  _thorchain.assetList,
  _titan.assetList,
  _turkchain.assetList,
  _unicorn.assetList,
  _unification.assetList,
  _union.assetList,
  _ununifi.assetList,
  _uptick.assetList,
  _vector.assetList,
  _wardenprotocol.assetList,
  _wolochain.assetList,
  _xarchain.assetList,
  _xion.assetList,
  _xpla.assetList,
  _xrplevm.assetList,
  _xyra.assetList,
  _zenrock.assetList,
  _zerone.assetList,
  _zetachain.assetList,
  _zigchain.assetList
];

export default assetList;
