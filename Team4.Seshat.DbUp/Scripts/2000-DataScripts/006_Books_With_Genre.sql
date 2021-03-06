
--MERGE generated by 'sp_generate_merge' stored procedure
--Originally by Vyas (http://vyaskn.tripod.com/code): sp_generate_inserts (build 22)
--Adapted for SQL Server 2008+ by Daniel Nolan (https://twitter.com/dnlnln)

SET NOCOUNT ON

SET IDENTITY_INSERT [BookGenre] ON

MERGE INTO [BookGenre] AS [Target]
USING (VALUES
  (1,N'Science Fiction')
 ,(2,N'Fantasy')
 ,(3,N'Action')
 ,(4,N'Drama')
 ,(5,N'Romance')
 ,(6,N'Horror')
 ,(7,N'Mystery')
) AS [Source] ([Id],[GenreName])
ON ([Target].[Id] = [Source].[Id])
WHEN MATCHED AND (
	NULLIF([Source].[GenreName], [Target].[GenreName]) IS NOT NULL OR NULLIF([Target].[GenreName], [Source].[GenreName]) IS NOT NULL) THEN
 UPDATE SET
  [Target].[GenreName] = [Source].[GenreName]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([Id],[GenreName])
 VALUES([Source].[Id],[Source].[GenreName])
WHEN NOT MATCHED BY SOURCE THEN 
 DELETE;

DECLARE @mergeError int
 , @mergeCount int
SELECT @mergeError = @@ERROR, @mergeCount = @@ROWCOUNT
IF @mergeError != 0
 BEGIN
 PRINT 'ERROR OCCURRED IN MERGE FOR [BookGenre]. Rows affected: ' + CAST(@mergeCount AS VARCHAR(100)); -- SQL should always return zero rows affected
 END
ELSE
 BEGIN
 PRINT '[BookGenre] rows affected by MERGE: ' + CAST(@mergeCount AS VARCHAR(100));
 END
GO



SET IDENTITY_INSERT [BookGenre] OFF
SET NOCOUNT OFF
GO



--MERGE generated by 'sp_generate_merge' stored procedure
--Originally by Vyas (http://vyaskn.tripod.com/code): sp_generate_inserts (build 22)
--Adapted for SQL Server 2008+ by Daniel Nolan (https://twitter.com/dnlnln)

SET NOCOUNT ON

SET IDENTITY_INSERT [BookRecord] ON

MERGE INTO [BookRecord] AS [Target]
USING (VALUES
  (1,N'The Eyes of the Dragon',N'Stephen King',2,1,2)
 ,(2,N'Ancillary Justice',N'Ann Leckie',2,1,1)
 ,(3,N'The Abhorsen Triology',N'Garth Niz',1,1,2)
 ,(4,N'Anathem',N'Neal Stephenson',1,1,1)
 ,(5,N'Jurassic Park',N'Michael Crichton',2,1,1)
 ,(6,N'The Eye of the World',N'Robert Jordan',3,1,2)
 ,(7,N'Dust',N'Hugh Howey',1,1,2)
 ,(8,N'His Majesty''s Service',N'Naomi Novik',1,1,2)
 ,(11,N'The Fellowship of the Ring',N'J.R.R. Tolkien',1,1,2)
 ,(23,N'The Lord of the Rings',N'J. R.R. Tolkien',1,1,2)
 ,(24,N'And Then There Were None',N'Agatha Christie',1,1,7)
 ,(26,N'Caliban''s War',N'James',1,1,1)
) AS [Source] ([Id],[Title],[Author],[Quantity],[LibraryId],[BookGenreId])
ON ([Target].[Id] = [Source].[Id])
WHEN MATCHED AND (
	NULLIF([Source].[Title], [Target].[Title]) IS NOT NULL OR NULLIF([Target].[Title], [Source].[Title]) IS NOT NULL OR 
	NULLIF([Source].[Author], [Target].[Author]) IS NOT NULL OR NULLIF([Target].[Author], [Source].[Author]) IS NOT NULL OR 
	NULLIF([Source].[Quantity], [Target].[Quantity]) IS NOT NULL OR NULLIF([Target].[Quantity], [Source].[Quantity]) IS NOT NULL OR 
	NULLIF([Source].[LibraryId], [Target].[LibraryId]) IS NOT NULL OR NULLIF([Target].[LibraryId], [Source].[LibraryId]) IS NOT NULL OR 
	NULLIF([Source].[BookGenreId], [Target].[BookGenreId]) IS NOT NULL OR NULLIF([Target].[BookGenreId], [Source].[BookGenreId]) IS NOT NULL) THEN
 UPDATE SET
  [Target].[Title] = [Source].[Title], 
  [Target].[Author] = [Source].[Author], 
  [Target].[Quantity] = [Source].[Quantity], 
  [Target].[LibraryId] = [Source].[LibraryId], 
  [Target].[BookGenreId] = [Source].[BookGenreId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([Id],[Title],[Author],[Quantity],[LibraryId],[BookGenreId])
 VALUES([Source].[Id],[Source].[Title],[Source].[Author],[Source].[Quantity],[Source].[LibraryId],[Source].[BookGenreId])
WHEN NOT MATCHED BY SOURCE THEN 
 DELETE;

DECLARE @mergeError int
 , @mergeCount int
SELECT @mergeError = @@ERROR, @mergeCount = @@ROWCOUNT
IF @mergeError != 0
 BEGIN
 PRINT 'ERROR OCCURRED IN MERGE FOR [BookRecord]. Rows affected: ' + CAST(@mergeCount AS VARCHAR(100)); -- SQL should always return zero rows affected
 END
ELSE
 BEGIN
 PRINT '[BookRecord] rows affected by MERGE: ' + CAST(@mergeCount AS VARCHAR(100));
 END
GO



SET IDENTITY_INSERT [BookRecord] OFF
SET NOCOUNT OFF
GO
