package com.jshop.entity;

// Generated 2013-9-6 22:36:02 by Hibernate Tools 3.4.0.CR1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

/**
 * TableT generated by hbm2java
 */
@Entity
@Table(name = "table_t", catalog = "jshoper3", uniqueConstraints = @UniqueConstraint(columnNames = "TABLE_NUMBER"))
public class TableT implements java.io.Serializable {

	private String tableid;
	private String tableNumber;
	private String roomName;
	private Integer androidDevicesCount;
	private String note;
	private Date createtime;
	private String creatorid;
	private Integer nop;
	private String tablestate;
	private int floor;
	private Integer rnop;

	public TableT() {
	}

	public TableT(String tableid, String tableNumber, String roomName,
			Date createtime, String creatorid, String tablestate, int floor) {
		this.tableid = tableid;
		this.tableNumber = tableNumber;
		this.roomName = roomName;
		this.createtime = createtime;
		this.creatorid = creatorid;
		this.tablestate = tablestate;
		this.floor = floor;
	}

	public TableT(String tableid, String tableNumber, String roomName,
			Integer androidDevicesCount, String note, Date createtime,
			String creatorid, Integer nop, String tablestate, int floor,
			Integer rnop) {
		this.tableid = tableid;
		this.tableNumber = tableNumber;
		this.roomName = roomName;
		this.androidDevicesCount = androidDevicesCount;
		this.note = note;
		this.createtime = createtime;
		this.creatorid = creatorid;
		this.nop = nop;
		this.tablestate = tablestate;
		this.floor = floor;
		this.rnop = rnop;
	}

	@Id
	@Column(name = "TABLEID", unique = true, nullable = false, length = 20)
	public String getTableid() {
		return this.tableid;
	}

	public void setTableid(String tableid) {
		this.tableid = tableid;
	}

	@Column(name = "TABLE_NUMBER", unique = true, nullable = false, length = 20)
	public String getTableNumber() {
		return this.tableNumber;
	}

	public void setTableNumber(String tableNumber) {
		this.tableNumber = tableNumber;
	}

	@Column(name = "ROOM_NAME", nullable = false, length = 45)
	public String getRoomName() {
		return this.roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	@Column(name = "ANDROID_DEVICES_COUNT")
	public Integer getAndroidDevicesCount() {
		return this.androidDevicesCount;
	}

	public void setAndroidDevicesCount(Integer androidDevicesCount) {
		this.androidDevicesCount = androidDevicesCount;
	}

	@Column(name = "NOTE", length = 500)
	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATETIME", nullable = false, length = 0)
	public Date getCreatetime() {
		return this.createtime;
	}

	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}

	@Column(name = "CREATORID", nullable = false, length = 20)
	public String getCreatorid() {
		return this.creatorid;
	}

	public void setCreatorid(String creatorid) {
		this.creatorid = creatorid;
	}

	@Column(name = "NOP")
	public Integer getNop() {
		return this.nop;
	}

	public void setNop(Integer nop) {
		this.nop = nop;
	}

	@Column(name = "TABLESTATE", nullable = false, length = 1)
	public String getTablestate() {
		return this.tablestate;
	}

	public void setTablestate(String tablestate) {
		this.tablestate = tablestate;
	}

	@Column(name = "FLOOR", nullable = false)
	public int getFloor() {
		return this.floor;
	}

	public void setFloor(int floor) {
		this.floor = floor;
	}

	@Column(name = "RNOP")
	public Integer getRnop() {
		return this.rnop;
	}

	public void setRnop(Integer rnop) {
		this.rnop = rnop;
	}

}
