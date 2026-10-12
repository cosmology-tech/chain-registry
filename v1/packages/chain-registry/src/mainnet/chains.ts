import { Chain } from '@chain-registry/types';

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

const chains: Chain[] = [
  _ethereum.chain,
  _namada.chain,
  _penumbra.chain,
  _rootstock.chain,
  _solana.chain,
  _ton.chain,
  _tron.chain,
  _aaronetwork.chain,
  _agoric.chain,
  _aioz.chain,
  _akash.chain,
  _allora.chain,
  _althea.chain,
  _amitis.chain,
  _andromeda.chain,
  _archway.chain,
  _arkeo.chain,
  _arkh.chain,
  _assetmantle.chain,
  _atomone.chain,
  _aura.chain,
  _axelar.chain,
  _axiome.chain,
  _axone.chain,
  _babylon.chain,
  _bandchain.chain,
  _beezee.chain,
  _bitbadges.chain,
  _bitcanna.chain,
  _bitsong.chain,
  _bitway.chain,
  _blg24.chain,
  _blockx.chain,
  _bluechip.chain,
  _bluzelle.chain,
  _bouachain.chain,
  _buycex.chain,
  _canto.chain,
  _carbon.chain,
  _celestia.chain,
  _chain4energy.chain,
  _cheqd.chain,
  _chihuahua.chain,
  _chimba.chain,
  _cifer.chain,
  _cnhostables.chain,
  _commercionetwork.chain,
  _composable.chain,
  _conscious.chain,
  _coreum.chain,
  _cosmoshub.chain,
  _coss.chain,
  _crescent.chain,
  _cronos.chain,
  _cryptoorgchain.chain,
  _cysic.chain,
  _decentr.chain,
  _desmos.chain,
  _divine.chain,
  _doravota.chain,
  _dungeon.chain,
  _dydx.chain,
  _dymension.chain,
  _echelon.chain,
  _empowerchain.chain,
  _epix.chain,
  _ethos.chain,
  _fandomchain.chain,
  _fetchhub.chain,
  _finschia.chain,
  _firmachain.chain,
  _furya.chain,
  _galaxy.chain,
  _gateway.chain,
  _genesisl1.chain,
  _ggezchain.chain,
  _gitopia.chain,
  _gnodi.chain,
  _gonka.chain,
  _govgen.chain,
  _gravitybridge.chain,
  _haqq.chain,
  _hazinachain.chain,
  _heli.chain,
  _highbury.chain,
  _hipercapital.chain,
  _hippoprotocol.chain,
  _humans.chain,
  _hyve.chain,
  _idep.chain,
  _impacthub.chain,
  _imversed.chain,
  _initia.chain,
  _injective.chain,
  _intento.chain,
  _irisnet.chain,
  _jackal.chain,
  _joltify.chain,
  _juno.chain,
  _kava.chain,
  _kiichain.chain,
  _kimanetwork.chain,
  _konstellation.chain,
  _kopi.chain,
  _kudora.chain,
  _kujira.chain,
  _kyve.chain,
  _lava.chain,
  _lefeef.chain,
  _likecoin.chain,
  _logos.chain,
  _lombardledger.chain,
  _loop.chain,
  _lorenzo.chain,
  _loyal.chain,
  _ltrstchain.chain,
  _lumen.chain,
  _lumera.chain,
  _lumiwaveprotocol.chain,
  _lumnetwork.chain,
  _mande.chain,
  _manifest.chain,
  _mantrachain.chain,
  _mayachain.chain,
  _medasdigital.chain,
  _meme.chain,
  _migaloo.chain,
  _mirage.chain,
  _mises.chain,
  _mtgbp.chain,
  _mucoin.chain,
  _mun.chain,
  _mythos.chain,
  _neura.chain,
  _neutaro.chain,
  _neutron.chain,
  _nibiru.chain,
  _nim.chain,
  _noble.chain,
  _nolus.chain,
  _nomic.chain,
  _nvnmchain.chain,
  _nyx.chain,
  _octa.chain,
  _okexchain.chain,
  _opct.chain,
  _optio.chain,
  _oraichain.chain,
  _osmosis.chain,
  _paloma.chain,
  _panacea.chain,
  _passage.chain,
  _paxi.chain,
  _persistence.chain,
  _planq.chain,
  _pocket.chain,
  _point.chain,
  _provenance.chain,
  _pundix.chain,
  _pylons.chain,
  _qfs.chain,
  _qie.chain,
  _qorechain.chain,
  _qubetics.chain,
  _quicksilver.chain,
  _qwoyn.chain,
  _realio.chain,
  _regen.chain,
  _ritbit.chain,
  _rizon.chain,
  _safrochain.chain,
  _saga.chain,
  _scorum.chain,
  _secretnetwork.chain,
  _seda.chain,
  _sei.chain,
  _self.chain,
  _sentinel.chain,
  _sge.chain,
  _shareledger.chain,
  _shentu.chain,
  _shido.chain,
  _sidechain.chain,
  _sifchain.chain,
  _six.chain,
  _sommelier.chain,
  _source.chain,
  _sovr.chain,
  _stoc.chain,
  _stratos.chain,
  _stride.chain,
  _sunrise.chain,
  _symphony.chain,
  _synternet.chain,
  _tac.chain,
  _tail.chain,
  _taketitan.chain,
  _tenet.chain,
  _teritori.chain,
  _terpnetwork.chain,
  _terra.chain,
  _terra2.chain,
  _thejaynetwork.chain,
  _thorchain.chain,
  _titan.chain,
  _turkchain.chain,
  _unicorn.chain,
  _unification.chain,
  _union.chain,
  _ununifi.chain,
  _uptick.chain,
  _vector.chain,
  _wardenprotocol.chain,
  _wolochain.chain,
  _xarchain.chain,
  _xion.chain,
  _xpla.chain,
  _xrplevm.chain,
  _xyra.chain,
  _zenrock.chain,
  _zerone.chain,
  _zetachain.chain,
  _zigchain.chain
];

export default chains;
