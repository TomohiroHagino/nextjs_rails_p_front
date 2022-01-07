export interface CRED {
  email: string;
  password: string;
}

export interface CRED_HEAD {
  contentType: string;
  uid: string;
  accessToken: string;
  client: string
}

export interface CARD {
  body?: string;
  imgUrl?: string;
}

export interface ME_OBJECT {
  model?: string
  id: number,
  introduce?: string,
  frontend?: string;
  backend?: string;
  infra?: string;
  other?: string;
  deleted?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface SKILL_OBJECT {
  model?: string;
  id: number;
  title?: string;
  body?: string;
}

export interface SKILL_PROPS {
  id: number;
  title: string;
  body: string;
  model: string;
  // モーダルアクション
  showModal: boolean;
  setShowModal?: Function;
  showEditModalFunction: Function;
  setShowModalFunction: Function;
  // フィールドステート管理
  createTitle: string;
  createBody: string;
  // フィールド変更処理
  changeInputTitle: Function;
  changeInputBody: Function;
  // 更新管理
  skillId?: string;
  setSkillId: Function;
  // 更新処理
  putSkillObj: Function;
  // 削除処理
  deleteSkillObj: Function;
}